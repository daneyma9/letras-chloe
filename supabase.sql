-- Base de datos de "Letras con Lila" (Supabase).
-- Una fila por familia. Nadie puede leer la tabla directamente: solo se entra con la contraseña,
-- que se guarda cifrada. Tras 8 intentos fallidos se bloquea 10 minutos.
create extension if not exists pgcrypto with schema extensions;

create table if not exists public.familias (
  id text primary key,
  clave text not null,
  datos jsonb not null default '{}'::jsonb,
  actualizado timestamptz not null default now(),
  fallos int not null default 0,
  bloqueado_hasta timestamptz
);
alter table public.familias enable row level security;

create or replace function public.entrar(p_id text, p_clave text)
returns jsonb language plpgsql security definer
set search_path = public, extensions as $$
declare f public.familias;
begin
  select * into f from public.familias where id = p_id;
  if not found then return null; end if;
  if f.bloqueado_hasta is not null and f.bloqueado_hasta > now() then
    raise exception 'bloqueado';
  end if;
  if f.clave = crypt(p_clave, f.clave) then
    update public.familias set fallos = 0, bloqueado_hasta = null where id = p_id;
    return jsonb_build_object('datos', f.datos, 'actualizado', f.actualizado);
  end if;
  update public.familias
     set fallos = fallos + 1,
         bloqueado_hasta = case when fallos + 1 >= 8 then now() + interval '10 minutes' end
   where id = p_id;
  return null;
end $$;

create or replace function public.guardar(p_id text, p_clave text, p_datos jsonb)
returns timestamptz language plpgsql security definer
set search_path = public, extensions as $$
declare f public.familias; t timestamptz := now();
begin
  select * into f from public.familias where id = p_id;
  if not found or f.clave <> crypt(p_clave, f.clave) then return null; end if;
  if pg_column_size(p_datos) > 400000 then raise exception 'demasiado grande'; end if;
  update public.familias set datos = p_datos, actualizado = t where id = p_id;
  return t;
end $$;

grant execute on function public.entrar(text, text) to anon;
grant execute on function public.guardar(text, text, jsonb) to anon;

-- Para crear la familia (ejecutar una vez, a mano, con vuestra contraseña; no guardar aquí):
-- insert into public.familias (id, clave) values ('ID', crypt('CONTRASEÑA', gen_salt('bf')));
