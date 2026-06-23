---
layout: page
title: Ideal Gas Laws You Can Eat
description: A hands-on first-year activity using marshmallows under vacuum to introduce pressure, volume, and the ideal gas law
img: assets/img/marshmallow_vacuum.jpg
importance: 1
category: outreach
related_publications: true
---

This activity introduces first-year students to core chemical engineering concepts—pressure, volume, and the ideal gas law—through a simple, memorable demonstration: marshmallows expanding and collapsing under vacuum. It was developed for a first-year engineering design (FYED) module and is shared here so that other instructors can replicate it freely.

The goal of this page is **replication**. Everything you need to run the activity yourself—materials, a data-collection template, and the 3D-printable coupler—is linked below.

<!-- Citation placeholder — WIP ASEE paper, becomes available when the conference concludes -->
<!-- {% raw %}{% cite YOUR_ASEE_KEY %}{% endraw %} -->

> *A peer-reviewed write-up of this activity is in progress with ASEE and will be linked here once the conference proceedings are published.*

### Learning Goals

- Give first-year students an accurate, tangible picture of what chemical engineers actually do
- Introduce the relationship between pressure and volume (Boyle's law) through direct observation
- Connect a playful demonstration to foundational concepts students will revisit in thermodynamics
- Build on FYED's broad exposure by adding depth in a single discipline

### How It Works

Marshmallows are mostly trapped air in a sugar matrix. When placed in a sealed chamber and the pressure is reduced, the trapped gas expands and the marshmallow visibly puffs up; restoring pressure collapses it. Students measure and record the change, then relate their observations back to the ideal gas law:

$$
PV = nRT
$$

By holding temperature and the amount of gas roughly constant, students see Boyle's law in action: as pressure drops, volume rises.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/gif/Marshmallow_Take2.gif" title="Marshmallow expansion under vacuum" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A marshmallow at atmospheric pressure (left) and under reduced pressure (right)
</div>

---

## Replicate This Activity

### Materials List

| Item | Notes / Suggested Source |
| --- | --- |
| Marshmallows (standard size) | Any grocery brand; fresh marshmallows work best |
| Clear vacuum chamber or rigid clear container | Must hold a seal; size to your group |
| Hand vacuum pump or small electric pump | Hand pump keeps cost low and is student-operable |
| 3D-printed coupler | STL provided below — connects pump to chamber |
| Calipers or ruler | For measuring marshmallow dimensions |
| Data-collection sheet | Template provided below |

*<!-- Update quantities, vendor links, and approximate costs here. -->*

### Data-Collection Template

A pre-formatted spreadsheet for students to log pressure readings and corresponding marshmallow dimensions, with built-in columns for calculating volume change.

- 📊 **[Download data-collection template (.xlsx)]({{ 'assets/xlsx/CBE_Spreadsheet_Fall_2025.xlsx' | relative_url }})**

*<!-- Place the .xlsx file at assets/files/ and confirm the filename matches. -->*

### 3D-Printed Coupler

The coupler adapts a standard hand pump to the vacuum chamber. Print in PLA or PETG; no supports required.

- 🖨️ **[Download coupler STL]({{ '/assets/files/marshmallow_coupler.stl' | relative_url }})**

*<!-- Place the .stl file at assets/files/ and add recommended print settings (layer height, infill) here. -->*

<!-- 
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/coupler_render.png" title="3D-printed coupler" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Rendering of the 3D-printed pump-to-chamber coupler
</div>
 -->

---

### Step-by-Step Procedure

1. **Setup** — Attach the 3D-printed coupler to the vacuum chamber and connect the pump.
2. **Baseline measurement** — Measure and record the marshmallow's dimensions at atmospheric pressure.
3. **Evacuate** — Slowly reduce the pressure, pausing at intervals to record pressure and marshmallow size.
4. **Restore** — Return to atmospheric pressure and observe the collapse.
5. **Analyze** — Use the template to plot volume against pressure and discuss the inverse relationship.

*<!-- Expand each step with timing, safety notes, and facilitation tips. -->*

### Facilitation Notes & Tips

- Works well as a small-group station rotation in a larger FYED session
- Fresh marshmallows respond more dramatically than stale ones
- Encourage students to predict before they evacuate, then compare to what they observe

*<!-- Add observed pitfalls, timing for a typical session, and adaptation ideas here. -->*

### License & Reuse

These materials are shared so that other educators can adopt and adapt the activity. Please cite the ASEE paper (link forthcoming) if you build on this work.

*<!-- Specify a license, e.g., CC BY 4.0, if desired. -->*