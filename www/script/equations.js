var ids;

var equations = [
  {
    // NaOH, H2SO4 : Na2SO4, H2O
    // Na O H S
    left: ["NaOH", [1, 1, 1, 0], "H<sub>2</sub>SO<sub>4</sub>", [0, 4, 2, 1]],
    right: ["Na<sub>2</sub>SO<sub>4</sub>", [2, 4, 0, 1], "H<sub>2</sub>0", [0, 1, 2, 0]],
    correct: [2, 1, 1, 2]
  },
  {
    // Na, H2O : NaOH, H2
    // Na O H
    left: ["Na", [1, 0, 0], "H<sub>2</sub>O", [0, 1, 2]],
    right: ["NaOH", [1, 1, 1], "H<sub>2</sub>O", [0, 1, 2]]
  },
  {
    // Fe, O2 : 2Fe2O3
    // Fe O
    left: ["Fe", [1, 0], "O<sub>2</sub>", [0,2]],
    right: ["Fe<sub>2</sub>O<sub>3</sub>", [2, 3]]
  },
  {
    // Na2CO3, H3PO4 : Na3PO4, H2O, CO2
    // Na C O H P
    left: ["Na<sub>2</sub>CO<sub>3</sub>", [2, 1, 3, 0, 0], "H<sub>3</sub>PO<sub>4</sub>", [0, 0, 4, 3, 1]],
    right: ["Na<sub>3</sub>PO<sub>4</sub>", [3, 0, 4, 0, 1], "H<sub>2</sub>O", [0, 0, 1, 2, 0], "CO<sub>2</sub>", [0, 1, 2, 0, 0]]
  },
  {
    // Ca(OH)2, HCl : CaCl2, H2O
    // Ca O H Cl
    left: ["Ca(OH)<sub>2</sub>", [1, 2, 2, 0], "HCl", [0, 0, 1, 1]],
    right: ["CaCl<sub>2</sub>", [1, 0, 0, 1], "H<sub>2</sub>O", [0, 1, 2, 0]]
  },
  {
    // K3PO4, H2SO4 : K2SO4, H3PO4
    // K P O H S
    left: ["K<sub>3</sub>PO<sub>4</sub>", [3, 1, 4, 0, 0], "H<sub>2</sub>SO<sub>4</sub>", [0, 0, 4, 2, 1]],
    right: ["K<sub>2</sub>SO<sub>4</sub>", [2, 0, 4, 0, 1], "H<sub>3</sub>PO<sub>4</sub>", [0, 1, 4, 3, 0]]
  },

  // Shirru
  {
    //C6H5COOH, O2 : CO2, H2O
    //C H O
    left: ["C<sub>6</sub>H<sub>5</sub>COOH", [7,6,2], "O<sub>2</sub>", [0,0,2]],
    right: ["CO<sub>2</sub>", [1,0,2], "H<sub>2</sub>O", [0,2,1]]
  },
  {
    //Cr, HCl : CrCl3, H2
    //Cr H Cl
    left: ["Cr",[1,0,0], "HCl", [0,1,1]],
    right: ["CrCl<sub>3</sub>", [1,0,3], "H<sub>2</sub>", [0,2,0]]
  },
  {
    // CH4, O2 : CO2, H2O
    //C H O
    left: ["CH<sub>4</sub>", [1,4,0], "O<sub>2</sub>", [0,0,2]],
    right: ["CO<sub>2</sub>", [1,0,2], "H<sub>2</sub>O",[0,2,1]]
  },
  {
    //C2H6, O2 : CO, H2O
    //C H O
    left: ["C<sub>2</sub>H<sub>6</sub>", [2,6,0], "O<sub>2</sub>", [0,0,2]],
    right: ["CO", [1,0,1], "H<sub>2</sub>O", [0,2,1]]
  },
  {
    //CaO, H3PO4 : Ca3(PO4)2, H2O
    //Ca O H P
    left: ["CaO", [1,1,0,0], "H<sub>3</sub>PO<sub>4</sub>", [0,4,3,1]],
    right: ["Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>", [3,8,0,2], "H<sub>2</sub>O", [0,1,2,0]]
  },
  {
    //CaCO3 : CaO, CO2
    //Ca C O
    left: ["CaCO<sub>3</sub>", [1,1,3]],
    right: ["CaO", [1,0,1], "CO<sub>2</sub>", [0,1,2]]
  },
  {
    //Pb(NO3)2, NaI : PbI2, NaNO3
    //Pb N O I Na
    left: ["Pb(NO<sub>3</sub>)<sub>2</sub>", [1,2,6,0,0], "NaI", [0,0,0,1,1]],
    right: ["PbI<sub>2</sub>", [1,0,0,1,0], "NaNO<sub>3</sub>", [0,1,3,0,1]]
  },
  {
    //BaCl2, NaOH : Ba(OH)2, NaCl
    //Ba Cl Na O H
    left: ["BaCl<sub>2</sub>", [1,2,0,0,0], "NaOH", [0,0,1,1,1]],
    right: ["Ba(OH)<sub>2</sub>", [1,0,0,2,2], "NaCl", [0,1,1,0,0]]
  },
  {
    //KOH, H2S : K2S, H2O
    //K O H S
    left: ["KOH", [1,1,1,0],"H<sub>2</sub>S",[0,0,2,1]],
    right: ["K<sub>2</sub>S", [2,0,0,1], "H<sub>2</sub>O", [0,1,2,0]]
  },
  {
    //Al(OH)3, HNO3 : Al(NO)3, H2O
    //Al O H N
    left: ["Al(OH)<sub>3</sub>", [1,3,3,0], "HNO<sub>3</sub>", [0,3,1,1]],
    right: ["Al(NO)<sub>3</sub>", [1,3,0,3], "H<sub>2</sub>O", [0,1,2,0]]
  },
  {
    //Al(OH)3, H2SO4 : Al2(SO4)3, H2O
    //Al O H S
    left: ["Al(OH)<sub>3</sub>", [1,3,3,0], "H<sub>2</sub>SO<sub>4</sub>", [0,4,2,1]],
    right: [ "Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>", [2,12,0,3], "H<sub>2</sub>O", [0,1,2,0]]
  },
  {
    //K2S2O7, Cr2O3 : K2SO<div class="formula">P<sub>4</sub> + 5 O<sub>2</sub> <img src="../../../img/strzalka.svg" height="15"> P<sub>4</sub>O<sub>10</sub></div>4, Cr2(SO4)3
    //K S O Cr
    left: ["K<sub>2</sub>S<sub>2</sub>O7", [2,2,7,0], "Cr<sub>2</sub>O<sub>3</sub>", [0,0,3,2]],
    right: ["K<sub>2</sub>SO<sub>4</sub>",[2,1,4,0], "Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>", [0,3,12,2]]
  },
  {
    //Mg, HBr : MgBr2, H2
    //Mg H Br
    left: ["Mg", [1,0,0], "HBr",[0,1,1]],
    right: ["MgBr<sub>2</sub>", [1,0,2],"H<sub>2</sub>",[0,2,0]]
  },
  {
    //ZnO, HCl : ZnCl2, H2O
    // Zn O H Cl
    left: ["ZnO",[1,1,0,0], "HCl", [0,0,1,1]],
    right: ["ZnCl<sub>2</sub>", [1,0,0,2],"H<sub>2</sub>O",[0,1,2,0]]
  },
  {
    //Cs, H2SO4 : Cs2SO4, H2
    //Cs H S O
    left: ["Cs", [1,0,0,0], "H<sub>2</sub>SO<sub>4</sub>", [0,2,1,4]],
    right: ["Cs<sub>2</sub>SO<sub>4</sub>", [2,0,1,4], "H<sub>2</sub>", [0,2,0,0]]
  },
  {
    //Na2O, HCl : NaCl, H2O
    //Na O H Cl
    left: ["Na<sub>2</sub>O", [2,1,0,0], "HCl", [0,0,1,1]],
    right: ["NaCl", [1,0,0,1], "H<sub>2</sub>O", [0,1,2,0]]
  },
  {
    //BaO, H3PO4 : Ba3(PO4)2, H2O
    //Ba O H P
    left: ["BaO", [1,1,0,0], "H<sub>3</sub>PO<sub>4</sub>",[0,4,3,1]],
    right: ["Ba<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>", [3,8,0,2], "H<sub>2</sub>O", [0,1,2,0]]
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
};

var generateTask = function(id) {
  var result = '<div class="formula">';
  for(var i = 0; i < equations[id].left.length; i += 2) {
    if(i != 0) {
      result += " + ";
    }
    result += '<input value="1" type="number" id="' + id + i / 2 + '" min="1" max="20">' + equations[id].left[i];
  }
  result += ' <img src="../../../img/strzalka.svg" height="15"> ';
  for(var i = 0; i < equations[id].right.length; i += 2) {
    if(i != 0) {
      result += " + ";
    }
    result += '<input value="1" type="number" id="' + id + (equations[id].left.length + i) / 2 + '" min="1" max="20">' + equations[id].right[i];
  }
  result += '</div>';
  return result;
};

var generateHTML = function() {
  ids = getRandomQuestions();
  var result = "";
  for(var i = 0; i < ids.length; i++) {
    result += '<div class="task" id="d' + ids[i] + '">' + generateTask(ids[i]) + '<p>&nbsp;</p></div>';
  }
  document.getElementById("exercises").innerHTML = result;
}

var res = [
  [
    "Tym razem się  nie powiodło. Spróbuj ponownie.",
    "Przelicz jeszcze raz i w końcu się uda!",
    "Nie poddawaj się! Zastanów się nad tym raz jeszcze."
  ],
  [
    "Dobrze, ale niepotrzebnie marnujesz odczynniki.",
    "Świetnie, ale czy nie za dużo odczynników?",
    "Nie tak rozrzutnie z odczynnikami, a będzie idealnie!"
  ],
  [
    "Świetnie sobie radzisz",
    "Genialnie!",
    "Wspaniale!",
    "Oby tak dalej!",
    "Tak trzymaj!"
  ]
];

var validate = function() {
  // po wszystkich zadaniach
  for(var i = 0; i < ids.length; i++) {
    var evArray = [];
    var numberOfElements = equations[ids[i]].left[1].length;
    for(var j = 0; j < numberOfElements; j++) {
      evArray[j] = 0;
    }
    // po wszystkich zwiazkach lewych z danego zadania
    for(var j = 0; j < equations[ids[i]].left.length / 2; j++) {
      var id = "" + ids[i] + j;
      var multiplier =  parseInt(document.getElementById(id).value, 10);
      for(var k = 0; k < numberOfElements; k++) {
        evArray[k] += multiplier +
      }

    }
  }
}

document.getElementById("button").onclick = function() {
  validate();
}

generateHTML();
