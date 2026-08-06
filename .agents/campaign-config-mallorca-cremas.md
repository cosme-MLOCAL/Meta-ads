# Configuración de Campaña Meta Ads — Thinkcosmetic: Cremas, Exfoliante y Mascarilla (Mallorca)

*Creado: 6 agosto 2026 · Estado: LISTO PARA LANZAR (pendiente de autorizar el conector Meta Ads)*

> ⚠️ **El conector `Meta_ADs` (MCP) no está autorizado en esta sesión.** No se ha creado nada en el Administrador de Anuncios todavía. Este documento deja toda la configuración especificada para copiarla/aplicarla en cuanto se autorice el conector (vía ajustes de conectores de claude.ai, o `/mcp` en una sesión interactiva) o para introducirla manualmente en Meta Ads Manager.

## Resumen de campaña

| Campo | Valor |
|---|---|
| Marca / producto | **Thinkcosmetic** |
| Web / destino | https://www.thinkcosmetic.shop/cuidado-facial/ |
| Productos | Crema facial, exfoliante, mascarilla |
| Creatividad | Vídeo/Reel protagonizado por influencer local mallorquina |
| Idioma del anuncio | Mallorquín (variante balear del catalán) |
| Mercado | Exclusivamente Mallorca (excluye Menorca, Ibiza, Formentera) |
| Objetivo | Tráfico/Ventas → https://www.thinkcosmetic.shop/cuidado-facial/ |
| Audiencia | Mujeres, 25-54 años |
| Presupuesto | 5 €/día |
| Duración sugerida | 4 semanas (ajustable) |

> ℹ️ No pude leer automáticamente el catálogo de thinkcosmetic.shop (la web bloquea el acceso de bots, error 403), así que no tengo nombres exactos de producto ni precios. Si me pasas los nombres reales de la crema, el exfoliante y la mascarilla (o una captura de la página), afino el copy con esos nombres en vez de términos genéricos.

---

## 1. Estructura de campaña

- **Nivel campaña:** un único objetivo — *Ventas* (o *Tráfico* como paso intermedio, ver aviso arriba).
- **Presupuesto:** CBO (Presupuesto a nivel de campaña) — 5 €/día.
- **1 conjunto de anuncios** enfocado 100% en Mallorca (ver segmentación abajo).
- **2-3 variantes de anuncio** dentro del conjunto: el Reel principal de la influencer + 1-2 recortes/formatos (Stories vertical, versión corta 15") para test A/B de creatividad.

---

## 2. Segmentación de audiencia — cómo excluir extranjeros y peninsulares

Esta es la parte crítica de la petición ("que no salga a extranjeros ni peninsulares que están en Mallorca"). Meta no tiene un campo de "nacionalidad", pero se logra el mismo efecto combinando estas tres palancas:

### a) Ubicación + tipo de ubicación (la más importante)
- **Ubicación:** fijar un pin centrado en Mallorca con radio que cubra toda la isla (aprox. 40-45 km desde el centro geográfico, cerca de Algaida/Montuïri), **o** seleccionar el término "Mallorca" si Meta lo ofrece como ubicación específica, evitando que el radio toque Menorca/Ibiza.
- **Tipo de ubicación → "Personas que viven en esta ubicación" (Residentes).**
  Este es el ajuste que hace el trabajo real: excluye automáticamente a turistas extranjeros y a peninsulares de vacaciones o viaje en Mallorca, porque Meta infiere residencia a partir de la ubicación habitual del dispositivo (no de dónde está en ese momento). **No uses** "Todas las personas en esta ubicación" (incluiría turistas) ni "Personas de viaje" (es justo lo contrario de lo que se pide).

### b) Idioma
- **Idiomas del anuncio (Ad Set → Audiencia → Idiomas): Catalán.**
  Meta no distingue "mallorquín" como idioma propio dentro de su segmentación (lo agrupa bajo catalán), pero añadir este filtro reduce aún más la exposición a usuarios peninsulares/extranjeros cuyo idioma de Facebook/Instagram no está en catalán.

### c) Segmentación detallada — intereses
- **Excluir (Segmentación detallada → Excluir personas):**
  - "Expats" (interés disponible en Meta)
  - "Living abroad"
  - Cualquier interés de "turismo internacional" o "viajeros frecuentes" que aparezca al buscar
- **Incluir (opcional, para afinar sin reducir demasiado el alcance):**
  - Intereses de cuidado de la piel / cosmética natural / belleza
  - Interés "Mallorca" o "Islas Baleares" (como lugar, refuerza señal local, no como destino turístico)

### d) Datos demográficos
- Edad: **25-54**
- Género: **Mujeres**
- (Si el presupuesto lo permite más adelante, considerar un conjunto secundario más joven, 18-24, con creatividad adaptada — el uso de influencer suele funcionar muy bien en ese rango.)

### e) Ubicaciones (placements)
- Priorizar **Instagram Reels y Stories** (formato nativo para contenido de influencer) + Facebook Feed/Stories como secundario.
- Evitar Audience Network / Messenger inicialmente — menos relevante para este tipo de creatividad y dificulta controlar el filtro de residentes.

---

## 3. Creatividad

- **Formato principal:** Reel vertical 9:16, 15-30 segundos, con la influencer local usando/mostrando la crema, el exfoliante y la mascarilla (rutina de skincare, "antes/después", o testimonio).
- **Voz en off / diálogo:** en **mallorquín**, tono cercano y auténtico — evitar que suene a anuncio genérico traducido.
- **Texto en pantalla (subtítulos):** también en mallorquín, para reforzar la señal de "esto es de aquí" y ayudar a quien vea el vídeo sin sonido.
- **Menciones locales:** referencias a lugares o costumbres de Mallorca ayudan a reforzar el "hecho aquí, para gente de aquí" y refuerzan orgánicamente el filtro de audiencia (quien no es de Mallorca conecta menos con esas referencias).

### Copy sugerido (borrador — pendiente de revisión por hablante nativo de mallorquín)

> **Titular:** Fet a Mallorca, per la teva pell
> **Texto principal:** Crema, exfoliant i mascareta pensats per la nostra pell i el nostre clima. Thinkcosmetic — recomanat per [INFLUENCER].
> **CTA:** Comprar ara / Més informació
> **Enlace:** https://www.thinkcosmetic.shop/cuidado-facial/

⚠️ Este copy es un borrador orientativo en catalán estándar — **recomiendo que la influencer o un hablante nativo de mallorquín lo revise y adapte** antes de publicarlo, para que suene genuinamente local y no como una traducción.

---

## 4. Presupuesto y calendario

- **5 €/día** tal como se indicó. Con este presupuesto y creatividad en vídeo, el alcance diario en Mallorca será modesto (aprox. unos pocos miles de impresiones/día, variable según CPM). Si el objetivo es "dar a conocer" con impacto real en poco tiempo, considerar subir a 10-15 €/día al menos durante la primera semana de lanzamiento.
- **Duración sugerida:** 4 semanas, revisando resultados cada 7 días para ajustar creatividad/segmentación.

---

## 5. Pasos para lanzar (cuando el conector esté autorizado)

1. Autorizar el conector `Meta_ADs` desde los ajustes de conectores de claude.ai.
2. Confirmar la Página de Facebook y cuenta de Instagram conectadas a la cuenta publicitaria.
3. Confirmar nombre final de la marca y destino del clic (tienda online / Instagram / WhatsApp).
4. Crear la campaña con esta estructura (objetivo, presupuesto, conjunto de anuncios con la segmentación de la sección 2).
5. Subir el Reel de la influencer y el copy revisado en mallorquín.
6. Publicar y monitorizar alcance, frecuencia y % de la audiencia que efectivamente es "residente en Mallorca".

---

## 6. Pendientes / datos que faltan

- [x] Nombre definitivo de la marca/producto → **Thinkcosmetic**
- [x] URL de la tienda online → https://www.thinkcosmetic.shop/cuidado-facial/
- [ ] Nombres reales de los 3 productos (crema, exfoliante, mascarilla) y precios — la web no se pudo leer automáticamente (403)
- [ ] Nombre/@ de la influencer local para etiquetar y para partnership ads (Branded Content)
- [ ] Vídeo/Reel final para subir como creatividad
- [ ] Revisión nativa del copy en mallorquín
- [ ] Confirmación de cuenta publicitaria y página de Facebook/Instagram a usar (¿es la de Thinkcosmetic?)
