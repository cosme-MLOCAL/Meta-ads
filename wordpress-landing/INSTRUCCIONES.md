# La Font del Gall — Landing Page WordPress
## Guía paso a paso para Twenty Twenty-Two 2.1

---

## ARCHIVOS DE ESTE PAQUETE

| Archivo | Para qué sirve |
|---|---|
| `la-font-del-gall-child/style.css` | Tema hijo (CSS principal del diseño) |
| `la-font-del-gall-child/functions.php` | Encolado de estilos y Google Fonts |
| `hero-page-html-block.html` | HTML del bloque hero para pegar en WordPress |
| `custom-css-adicional.css` | CSS extra para Apariencia > Personalizar |

---

## PASO 1 — Instalar el tema hijo

El tema hijo evita que tus cambios se pierdan con las actualizaciones de Twenty Twenty-Two.

1. Comprime la carpeta `la-font-del-gall-child/` como `.zip`
2. En WordPress: **Apariencia > Temas > Añadir nuevo > Subir tema**
3. Sube el `.zip` y actívalo

> Si prefieres no usar tema hijo, salta al Paso 3 y añade el CSS en  
> **Apariencia > Personalizar > CSS adicional**.

---

## PASO 2 — Subir la imagen del restaurante

1. Ve a **Medios > Añadir nueva**
2. Sube una foto del restaurante (recomendado: 1920×1080 px, JPG)
3. Haz clic en la imagen subida y copia la **URL del archivo**
4. Guárdala, la necesitarás en el Paso 4

---

## PASO 3 — Crear la página de inicio

1. Ve a **Páginas > Añadir nueva**
2. Título: `Inicio` (o `Home`)
3. En el editor, **borra todos los bloques** que vengan por defecto
4. Importante: en el panel lateral derecho, bajo **Atributos de página > Plantilla**, selecciona:
   - `Página en blanco` ← esto elimina header y footer automáticamente
   - Si no aparece esa opción, sigue el Paso 5 para ocultarlos con CSS
5. Publica la página (puedes dejarla como borrador hasta terminar)

---

## PASO 4 — Añadir el bloque HTML del hero

1. Dentro del editor de la página, haz clic en el **botón + azul** para añadir bloque
2. Busca **"HTML personalizado"** y añádelo
3. Haz clic en **"Editar como HTML"** dentro del bloque
4. Abre el archivo `hero-page-html-block.html` de este paquete
5. Copia **todo** el contenido y pégalo en el bloque HTML
6. **Sustituye** esta línea con la URL real de tu imagen:
   ```
   src="/wp-content/uploads/tu-imagen-restaurante.jpg"
   ```
   Pega la URL que copiaste en el Paso 2
7. Guarda la página

---

## PASO 5 — Ocultar header y footer (si siguen visibles)

### Opción A — Plantilla "Página en blanco" (la más sencilla)
Twenty Twenty-Two incluye esta plantilla de serie. Al asignarla a tu página (Paso 3), el header y footer desaparecen sin CSS adicional.

### Opción B — CSS adicional (si la Opción A no funciona)

1. Ve a **Apariencia > Personalizar > CSS adicional**
2. Abre el archivo `custom-css-adicional.css` de este paquete
3. Pega **todo** su contenido ahí
4. Haz clic en **Publicar**

> Para ocultar solo en la home por ID: busca el ID de tu página en  
> **Páginas > Inicio** — verás el número en la URL del editor (ej: `post=2`).  
> Cambia el `2` en `.body.page-id-2` por ese número.

### Opción C — Site Editor (para usuarios avanzados)

1. Ve a **Apariencia > Editor** (Site Editor)
2. Selecciona la plantilla de tu página de inicio
3. Haz clic en el bloque Header y pulsa el icono de ojo para ocultarlo
4. Repite con el Footer
5. Guarda la plantilla

---

## PASO 6 — Añadir el CSS del diseño

Si usas el **tema hijo** (Paso 1), el CSS del `style.css` ya está activo.

Si **no** usas tema hijo:

1. Ve a **Apariencia > Personalizar > CSS adicional**
2. Copia **todo** el contenido de `la-font-del-gall-child/style.css`
   (desde la línea `/* RESET GLOBAL */` hasta el final)
3. Pégalo en el campo de CSS adicional
4. Haz clic en **Publicar**

---

## PASO 7 — Configurar la página de inicio

1. Ve a **Ajustes > Lectura**
2. En "Tu página de inicio muestra", selecciona **"Una página estática"**
3. En **"Página de inicio"**, selecciona la página `Inicio` que creaste
4. Guarda los cambios

---

## PASO 8 — Crear las páginas de destino de los botones

Los botones enlazan a `/menu/` y `/reservas/`. Crea esas páginas:

1. **Páginas > Añadir nueva** → Título: `Menú` → URL: `/menu/` → Publicar
2. **Páginas > Añadir nueva** → Título: `Reservas` → URL: `/reservas/` → Publicar

Si las URLs generadas son diferentes (ej: `/menu-del-restaurante/`), edita el bloque HTML y cambia los `href` de los botones por las URLs correctas.

---

## RESULTADO ESPERADO

- Pantalla completa con la foto del restaurante
- Capa oscura suave sobre la imagen (42% opacidad)
- Título "La Font del Gall" en grande, tipografía serif elegante
- Subtítulo en letras pequeñas y espaciadas
- Dos botones: Menú (fondo blanco) y Reservas (contorno blanco)
- Sin header ni footer visibles
- Adaptado a móvil y escritorio

---

## TIPOGRAFÍAS UTILIZADAS

- **Título**: Playfair Display (Google Fonts) — serif elegante
- **Subtítulo y botones**: Lato — sans-serif limpia

Se cargan automáticamente desde Google Fonts vía `functions.php`.  
Si no usas tema hijo, añade esto en **Apariencia > Personalizar > CSS adicional** (al inicio):

```html
<!-- Pega esto en el <head> via un plugin como "Insert Headers and Footers" -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

---

## PALETA DE COLORES

| Elemento | Color |
|---|---|
| Fondo fallback | `#1a1a1a` |
| Capa oscura | `rgba(0,0,0,0.42)` |
| Título | `#ffffff` |
| Subtítulo | `rgba(255,255,255,0.88)` |
| Botón primario fondo | `#ffffff` |
| Botón primario texto | `#1a1a1a` |
| Botón secundario borde | `rgba(255,255,255,0.75)` |

Puedes ajustar `rgba(0,0,0,0.42)` en el CSS (`hero-fullscreen::after`)  
para hacer la capa más oscura (0.55) o más clara (0.30) según tu imagen.

---

## SOLUCIÓN DE PROBLEMAS

**El hero no ocupa toda la pantalla:**
- Asegúrate de que la plantilla de página sea "Página en blanco"
- Verifica que el CSS adicional está publicado

**Se ven márgenes blancos alrededor:**
- Añade al CSS adicional:
  ```css
  .wp-site-blocks { padding: 0 !important; }
  .entry-content { padding: 0 !important; }
  ```

**Los botones no enlazan correctamente:**
- Comprueba la URL de tus páginas en **Páginas** y ajusta los `href` en el bloque HTML

**La imagen no se ve:**
- Verifica que la URL en el `src` de la imagen es accesible  
- Prueba abriendo esa URL directamente en el navegador
