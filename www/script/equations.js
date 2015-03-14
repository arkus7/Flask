/*
C6H5COOH, O2 : CO2, H2O
Cr, HCl : CrCl3, H2
CH4, O2 : CO2, H2O
C2H6, O2 : CO, H2O
Fe, O2 : Fe2O3
P4, O2 : P4O10
S, Al : Al2S3
CaO, H3PO4 : Ca3(PO4)2, H2O
CaCO3 : CaO, CO2
Pb(NO3)2, NaI : PbI2, NaNO3
BaCl2, NaOH : Ba(OH)2, NaCl
KOH, H2S : K2S, H2O
Al(OH)3, HNO3 : Al(NO)3, H2O
Al(OH)3, H2SO4 : Al2(SO4)3, H2O
K2S2O7, Cr2O3 : 3K2SO4, Cr2(SO4)3
Mg, HBr : MgBr2, H2
ZnO, HCl : ZnCl2, H2O
Cs, H2SO4 : Cs2SO4, H2
Na2O, HCl : NaCl, H2O
BaO, H3PO4 : Ba3(PO4)2, H2O
*/

var equations = [
  {
    // NaOH, H2SO4 : Na2SO4, H2O
    // Na O H S
    left: ["NaOH", [1, 1, 1, 0], "H2SO4", [0, 4, 2, 1]],
    right: ["Na2SO4", [2, 4, 0, 1], "H20", [0, 1, 2, 0]]
  },
  {
    // Na, H2O : NaOH, H2
    // Na O H
    left: ["Na", [1, 0, 0], "H2O", [0, 1, 2]],
    right: ["NaOH", [1, 1, 1], "H20", [0, 1, 2]]
  },
  {
    // Na2CO3, H3PO4 : Na3PO4, H2O, CO2
    // Na C O H P
    left: ["Na2CO3", [2, 1, 3, 0, 0], "H3PO4", [0, 0, 4, 3, 1]],
    right: ["Na3PO4", [3, 0, 4, 0, 1], "H20", [0, 0, 1, 2, 0], "CO2", [0, 1, 2, 0, 0]]
  },
  {
    // Ca(OH)2, HCl : CaCl2, H2O
    // Ca O H Cl
    left: ["Ca(OH)2", [1, 2, 2, 0], "HCl", [0, 0, 1, 1]],
    right: ["CaCl2", [1, 0, 0, 1], "H20", [0, 1, 2, 0]]
  },
  {
    // K3PO4, H2SO4 : K2SO4, H3PO4
    // K P O H S
    left: ["K3PO4", [3, 1, 4, 0, 0], "H2SO4", [0, 0, 4, 2, 1]],
    right: ["K2SO4", [2, 0, 4, 0, 1], "H3PO4", [0, 1, 4, 3, 0]]
  }
];
