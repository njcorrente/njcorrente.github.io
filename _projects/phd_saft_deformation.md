---
layout: page
title: SAFT-DFT Modeling of Deformation During Binary Gas Adsorption
description: Developed models integrating SAFT-DFT and GCMC simulations to predict carbon deformation during CO₂/CH₄ adsorption
img: assets/img/saft-dft.png
importance: 2
category: phd
related_publications: true
---

This project {% cite doi:10.1021/acs.jpcc.4c00833 %} developed an innovative approach combining Statistical Associating Fluid Theory with Density Functional Theory (SAFT-DFT) and Grand Canonical Monte Carlo (GCMC) simulations to predict how nanoporous carbons deform during binary gas adsorption - crucial for applications in carbon capture and enhanced gas recovery.

### Key Innovations

- First comprehensive study combining SAFT-DFT and GCMC to model binary gas adsorption-induced deformation
- Demonstrated SAFT-DFT's accuracy matches GCMC at fraction of computational cost
- Revealed complex nonmonotonic deformation behavior in nanopores

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/pore-model.png" title="Slit Pore Model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Representative 3 nm slit pore with adsorbed equimolar CO₂/CH₄ mixture at 10 MPa. Carbon atoms shown in gray, CO₂ in red/black, CH₄ in purple.
</div>

### Technical Approach

We modeled adsorption in graphite slit pores using:
- PC-SAFT equation of state for fluid properties
- Modified SAFT-DFT code for adsorption calculations
- GCMC simulations for validation
- Steele 10-4-3 potential for fluid-wall interactions

The model captured key molecular-level interactions while maintaining computational efficiency.

### Key Findings

1. **Pore Size Effects**
   - Adsorption and deformation decrease with increasing pore width
   - Strain shows nonmonotonic behavior due to molecular packing
   - Bulk-like fluid behavior emerges in larger pores

2. **Deformation Mechanisms**
   - Low pressure: contraction from wall attraction
   - Medium pressure: expansion from molecular repulsion
   - High pressure: possible secondary compression from external pressure

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/saft_adsorption.png" title="Adsorption Results" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/saft_strain.png" title="Strain Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Adsorption Isotherms (left) and solvation pressure and volumetric strain (right) for different pore sizes and gas compositions, showing complex nonmonotonic behavior.
</div>

### Computational Efficiency

SAFT-DFT proved remarkably efficient compared to GCMC:
- GCMC: ~6 days per isotherm point
- SAFT-DFT: ~20 minutes for entire isotherm
- Similar accuracy in predictions

### Impact

This work advances our ability to predict material behavior during:
- Carbon capture and storage
- Enhanced gas recovery
- Gas separation processes
- Energy storage applications

The developed framework provides a foundation for:
- Modeling more complex gas mixtures
- Studying functionalized carbons
- Optimizing material design
- Understanding geological carbon sequestration

### Methods
- Statistical Associating Fluid Theory (SAFT)
- Density Functional Theory (DFT)
- Grand Canonical Monte Carlo (GCMC)
- PC-SAFT equation of state
- Steele 10-4-3 potential

This research provides crucial insights for developing better carbon capture technologies and optimizing enhanced gas recovery processes while demonstrating the power of combining advanced theoretical methods with molecular simulations.