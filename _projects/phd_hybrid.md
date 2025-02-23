---
layout: page
title: Hybrid MC/MD Simulations of Carbon Deformation
description: Developed novel simulation approach combining Monte Carlo and Molecular Dynamics to predict how nanoporous carbons deform during gas adsorption
img: assets/img/MDMC_Graphic.png
importance: 1
category: phd
related_publications: true
---

This project introduced an innovative hybrid Monte Carlo/Molecular Dynamics (MC/MD) simulation methodology to study how nanoporous carbons deform when exposed to gases - crucial for applications in carbon capture, gas storage, and enhanced natural gas recovery.

### Key Innovations

- Developed novel iterative MC/MD simulation approach combining RASPA and LAMMPS
- First direct calculation of adsorbate-saturated structure compressibility from volume fluctuations
- Revealed dramatic mechanical property changes during adsorption
- Quantified adsorption stresses reaching 175 MPa

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/MDMC_Graphic.png" title="Hybrid Simulation Scheme" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematic of the iterative GCMC/NPT-MD simulation approach for modeling gas mixture adsorption on flexible 3D carbon structures.
</div>

### Technical Approach

1. **Structure Generation**
   - Generated 3D carbon models using Annealed Molecular Dynamics
   - Created structures with varying densities (0.5-1.0 g/cm³)
   - Used EDIP/c potential for carbon interactions

2. **Hybrid Simulation Method**
   - Iterative coupling of:
     - Grand Canonical Monte Carlo (GCMC) for adsorption
     - NPT Molecular Dynamics for structural relaxation
   - Custom scripts for seamless software integration
   - Equilibration protocols for reliable convergence

### Key Findings

1. **Structural Response**
   - Non-monotonic deformation behavior:
     - Initial contraction at low pressures
     - Expansion at higher pressures
   - Lower density carbons show greater flexibility
   - CO₂ presence amplifies deformation effects

2. **Mechanical Properties**
   - Dramatic changes in compressibility during adsorption
   - Initial softening followed by substantial hardening
   - Volumetric modulus variations:
     - 0.5 g/cm³ structure: 5-30 GPa
     - 1.0 g/cm³ structure: 18-49 GPa

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/structure-comparison.png" title="Carbon Structures" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Generated carbon structures showing different densities and corresponding pore size distributions. Left: 0.5 g/cm³, Right: 1.0 g/cm³.
</div>

### Adsorption and Deformation Behavior

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/adsorption-strain.png" title="Adsorption and Strain Behavior" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Adsorption (upper left) and strain (lower left) isotherms for CH₄ at 298K, with molecular configurations shown at key points (right). The inset shows the percent change in adsorption on flexible vs. rigid structures.
</div>

Key observations:
- Initial contraction at low pressures due to molecular "spring" effect
- Transition to expansion as pores become crowded
- Density-dependent deformation magnitude
- Enhanced adsorption in flexible structures
- Complex relationship between structural changes and adsorption capacity

### Impact

This work advances our understanding of:
- Material behavior during gas adsorption
- Mechanical property evolution
- Structure-property relationships
- Binary mixture effects

Applications include:
- Carbon capture optimization
- Gas storage system design
- Enhanced gas recovery
- Material degradation prediction

### Methods
- Grand Canonical Monte Carlo (GCMC)
- NPT Molecular Dynamics
- EDIP/c potential
- Custom integration scripts
- PoreBlazer analysis

### Computational Resources
- LAMMPS molecular dynamics software
- RASPA adsorption simulation package
- Custom file conversion utilities
- High-performance computing implementation

This research provides both fundamental insights and practical methodological advances for understanding and predicting the behavior of nanoporous materials under realistic operating conditions.