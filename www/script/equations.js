/*





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
  },

  // Shirru
  {
    //C6H5COOH, O2 : CO2, H2O
    //C H O
    left: ["C6H5COOH", [7,6,2], "O2", [0,0,2]],
    right: ["CO2", [1,0,2], "H2O", [0,2,1]]
  },
  {
    //Cr, HCl : CrCl3, H2
    //Cr H Cl
    left: ["Cr",[1,0,0], "HCl", [0,1,1]],
    right: ["CrCl3", [1,0,3], "H2", [0,2,0]]
  },
  {
    // CH4, O2 : CO2, H2O
    //C H O
    left: ["CH4", [1,4,0], "O2", [0,0,2]],
    right: ["CO2", [1,0,2], "H2O",[0,2,1]]
  },
  {
    //C2H6, O2 : CO, H2O
    //C H O
    left: ["C2H6", [2,6,0], "O2", [0,0,2]],
    right: ["CO", [1,0,1], "H2O", [0,2,1]]
  },
  {
    //CaO, H3PO4 : Ca3(PO4)2, H2O
    //Ca O H P
    left: ["CaO", [1,1,0,0], "H3PO4", [0,4,3,1]],
    right: ["Ca3(PO4)2", [3,8,0,2], "H2O", [0,1,2,0]]
  },
  {
    //CaCO3 : CaO, CO2
    //Ca C O
    left: ["CaCO3", [1,1,3]],
    right: ["CaO", [1,0,1], "CO2", [0,1,2]]
  },
  {
    //Pb(NO3)2, NaI : PbI2, NaNO3
    //Pb N O I Na
    left: ["Pb(NO3)2", [1,2,6,0,0], "NaI", [0,0,0,1,1]],
    right: ["PbI2", [1,0,0,1,0], "NaNO3", [0,1,3,0,1]]
  },
  {
    //BaCl2, NaOH : Ba(OH)2, NaCl
    //Ba Cl Na O H
    left: ["BaCl2", [1,2,0,0,0], "NaOH", [0,0,1,1,1]],
    right: ["Ba(OH)2", [1,0,0,2,2], "NaCl", [0,1,1,0,0]]
  },
  {
    //KOH, H2S : K2S, H2O
    //K O H S
    left: ["KOH", [1,1,1,0],"H2S",[0,0,2,1]],
    right: ["K2S", [2,0,0,1], "H2O", [0,1,2,0]]
  },
  {
    //Al(OH)3, HNO3 : Al(NO)3, H2O
    //Al O H N
    left: ["Al(OH)3", [1,3,3,0], "HNO3", [0,3,1,1]],
    right: ["Al(NO)3", [1,3,0,3], "H2O", [0,1,2,0]]
  },
  {
    //Al(OH)3, H2SO4 : Al2(SO4)3, H2O
    //Al O H S
    left: ["Al(OH)3", [1,3,3,0], "H2SO4", [0,4,2,1]],
    right: [ "Al2(SO4)3", [2,12,0,3], "H20", [0,1,2,0]]
  },
  {
    //K2S2O7, Cr2O3 : K2SO4, Cr2(SO4)3
    //K S O Cr
    left: ["K2S2O7", [2,2,7,0], "Cr2O3", [0,0,3,2]],
    right: ["K2SO4",[2,1,4,0], "Cr2(SO4)3", [0,3,12,2]]
  },
  {
    //Mg, HBr : MgBr2, H2
    //Mg H Br
    left: ["Mg", [1,0,0], "HBr",[0,1,1]],
    right: ["MgBr2", [1,0,2],"H2",[0,2,0]]
  },
  {
    //ZnO, HCl : ZnCl2, H2O
    // Zn O H Cl
    left: ["ZnO",[1,1,0,0], "HCl", [0,0,1,1]],
    right: ["ZnCl2", [1,0,0,2],"H2O",[0,1,2,0]]
  },
  {
    //Cs, H2SO4 : Cs2SO4, H2
    //Cs H S O
    left: ["Cs", [1,0,0,0], "H2SO4", [0,2,1,4]],
    right: ["Cs2SO4", [2,0,1,4], "H2", [0,2,0,0]]
  },
  {
    //Na2O, HCl : NaCl, H2O
    //Na O H Cl
    left: ["Na2O", [2,1,0,0], "HCl", [0,0,1,1]],
    right: ["NaCl", [1,0,0,1], "H2O", [0,1,2,0]]
  },
  {
    //BaO, H3PO4 : Ba3(PO4)2, H2O
    //Ba O H P
    left: ["BaO", [1,1,0,0], "H3PO4",[0,4,3,1]],
    right: ["Ba3(PO4)2", [3,8,0,2], "H2O", [0,1,2,0]]
  }

];

var getRandomQuestions = function() {
  var result = [];
  for(var i = 0; i < 22; i++) {
    result[i] = i + 1;
  }
  for(var i = 0; i < 22; i++) {
    var position = Math.floor(Math.random() * 22);
    var temp = result[position];
    result[position] = result[i];
    result[i] = temp;
  }
  return result.slice(0, 5);
}
