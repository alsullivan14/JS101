{"filter":false,"title":"num42.js","tooltip":"/js101/exercises/num42.js","undoManager":{"mark":71,"position":71,"stack":[[{"start":{"row":0,"column":0},"end":{"row":16,"column":66},"action":"insert","lines":["function wordSizes(str) {","  let removeMultiSpace = str.replace(/\\s\\s+/g, \" \");","  let list = removeMultiSpace.split(\" \");","  let result = {};","  ","  for (let i = 0; i < list.length; i++) {","    let key = list[i].length;","    if(!result[key]) {","      result[key] = 0;","    }","    result[key] += 1;","  }","  console.log(result);","}","","wordSizes(\"Hey diddle  diddle, the cat and the fiddle!\");","wordSizes(\"Here is a test string to identify longest leeeeength\");"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":8,"column":16},"action":"insert","lines":["// Input string with space separated words","// Output function that returns object containing key as length of words and value as number of words of that length","","// Separate words","// Remove any extra spaces","// Use an index to compare number of words with length(index)","// Create object entry with index as key and number as value","// Increment index","// Return object"],"id":3}],[{"start":{"row":1,"column":116},"end":{"row":1,"column":117},"action":"insert","lines":[" "],"id":4},{"start":{"row":1,"column":117},"end":{"row":1,"column":118},"action":"insert","lines":["w"]},{"start":{"row":1,"column":118},"end":{"row":1,"column":119},"action":"insert","lines":["i"]},{"start":{"row":1,"column":119},"end":{"row":1,"column":120},"action":"insert","lines":["t"]},{"start":{"row":1,"column":120},"end":{"row":1,"column":121},"action":"insert","lines":["h"]},{"start":{"row":1,"column":121},"end":{"row":1,"column":122},"action":"insert","lines":["o"]},{"start":{"row":1,"column":122},"end":{"row":1,"column":123},"action":"insert","lines":["u"]},{"start":{"row":1,"column":123},"end":{"row":1,"column":124},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":124},"end":{"row":1,"column":125},"action":"insert","lines":[" "],"id":5},{"start":{"row":1,"column":125},"end":{"row":1,"column":126},"action":"insert","lines":["n"]},{"start":{"row":1,"column":126},"end":{"row":1,"column":127},"action":"insert","lines":["o"]},{"start":{"row":1,"column":127},"end":{"row":1,"column":128},"action":"insert","lines":["n"]}],[{"start":{"row":1,"column":128},"end":{"row":1,"column":129},"action":"insert","lines":[" "],"id":6},{"start":{"row":1,"column":129},"end":{"row":1,"column":130},"action":"insert","lines":["a"]},{"start":{"row":1,"column":130},"end":{"row":1,"column":131},"action":"insert","lines":[";"]},{"start":{"row":1,"column":131},"end":{"row":1,"column":132},"action":"insert","lines":["l"]}],[{"start":{"row":1,"column":131},"end":{"row":1,"column":132},"action":"remove","lines":["l"],"id":7},{"start":{"row":1,"column":130},"end":{"row":1,"column":131},"action":"remove","lines":[";"]}],[{"start":{"row":1,"column":130},"end":{"row":1,"column":131},"action":"insert","lines":["l"],"id":8},{"start":{"row":1,"column":131},"end":{"row":1,"column":132},"action":"insert","lines":["p"]},{"start":{"row":1,"column":132},"end":{"row":1,"column":133},"action":"insert","lines":["h"]},{"start":{"row":1,"column":133},"end":{"row":1,"column":134},"action":"insert","lines":["a"]},{"start":{"row":1,"column":134},"end":{"row":1,"column":135},"action":"insert","lines":["b"]},{"start":{"row":1,"column":135},"end":{"row":1,"column":136},"action":"insert","lines":["e"]},{"start":{"row":1,"column":136},"end":{"row":1,"column":137},"action":"insert","lines":["t"]},{"start":{"row":1,"column":137},"end":{"row":1,"column":138},"action":"insert","lines":["i"]},{"start":{"row":1,"column":138},"end":{"row":1,"column":139},"action":"insert","lines":["c"]}],[{"start":{"row":1,"column":139},"end":{"row":1,"column":140},"action":"insert","lines":[" "],"id":9},{"start":{"row":1,"column":140},"end":{"row":1,"column":141},"action":"insert","lines":["c"]},{"start":{"row":1,"column":141},"end":{"row":1,"column":142},"action":"insert","lines":["h"]},{"start":{"row":1,"column":142},"end":{"row":1,"column":143},"action":"insert","lines":["a"]},{"start":{"row":1,"column":143},"end":{"row":1,"column":144},"action":"insert","lines":["r"]},{"start":{"row":1,"column":144},"end":{"row":1,"column":145},"action":"insert","lines":["a"]},{"start":{"row":1,"column":145},"end":{"row":1,"column":146},"action":"insert","lines":["c"]},{"start":{"row":1,"column":146},"end":{"row":1,"column":147},"action":"insert","lines":["v"]},{"start":{"row":1,"column":147},"end":{"row":1,"column":148},"action":"insert","lines":["t"]},{"start":{"row":1,"column":148},"end":{"row":1,"column":149},"action":"insert","lines":["e"]},{"start":{"row":1,"column":149},"end":{"row":1,"column":150},"action":"insert","lines":["r"]},{"start":{"row":1,"column":150},"end":{"row":1,"column":151},"action":"insert","lines":["s"]}],[{"start":{"row":1,"column":150},"end":{"row":1,"column":151},"action":"remove","lines":["s"],"id":10},{"start":{"row":1,"column":149},"end":{"row":1,"column":150},"action":"remove","lines":["r"]},{"start":{"row":1,"column":148},"end":{"row":1,"column":149},"action":"remove","lines":["e"]},{"start":{"row":1,"column":147},"end":{"row":1,"column":148},"action":"remove","lines":["t"]},{"start":{"row":1,"column":146},"end":{"row":1,"column":147},"action":"remove","lines":["v"]}],[{"start":{"row":1,"column":146},"end":{"row":1,"column":147},"action":"insert","lines":["t"],"id":11},{"start":{"row":1,"column":147},"end":{"row":1,"column":148},"action":"insert","lines":["e"]},{"start":{"row":1,"column":148},"end":{"row":1,"column":149},"action":"insert","lines":["r"]},{"start":{"row":1,"column":149},"end":{"row":1,"column":150},"action":"insert","lines":["s"]}],[{"start":{"row":12,"column":52},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]},{"start":{"row":13,"column":2},"end":{"row":13,"column":3},"action":"insert","lines":["l"]},{"start":{"row":13,"column":3},"end":{"row":13,"column":4},"action":"insert","lines":["e"]},{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":[" "],"id":13},{"start":{"row":13,"column":6},"end":{"row":13,"column":7},"action":"insert","lines":["r"]},{"start":{"row":13,"column":7},"end":{"row":13,"column":8},"action":"insert","lines":["e"]},{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["m"]},{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":["o"]},{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":["v"]},{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["N"],"id":14},{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["o"]},{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"insert","lines":["n"]},{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"insert","lines":["A"]},{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["l"]}],[{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["p"],"id":15},{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["h"]},{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["a"]}],[{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":[" "],"id":16},{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["="]}],[{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":[" "],"id":17},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["r"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"insert","lines":["m"],"id":18},{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"insert","lines":["o"]},{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"insert","lines":["v"]},{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":23},"end":{"row":13,"column":29},"action":"remove","lines":["remove"],"id":19},{"start":{"row":13,"column":23},"end":{"row":13,"column":39},"action":"insert","lines":["removeMultiSpace"]}],[{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"insert","lines":["."],"id":20},{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"insert","lines":["r"]},{"start":{"row":13,"column":41},"end":{"row":13,"column":42},"action":"insert","lines":["e"]},{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":["p"]},{"start":{"row":13,"column":43},"end":{"row":13,"column":44},"action":"insert","lines":["l"]},{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"insert","lines":["a"]},{"start":{"row":13,"column":45},"end":{"row":13,"column":46},"action":"insert","lines":["c"]},{"start":{"row":13,"column":46},"end":{"row":13,"column":47},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":47},"end":{"row":13,"column":49},"action":"insert","lines":["()"],"id":21}],[{"start":{"row":13,"column":48},"end":{"row":13,"column":49},"action":"insert","lines":["/"],"id":22},{"start":{"row":13,"column":49},"end":{"row":13,"column":50},"action":"insert","lines":["a"]}],[{"start":{"row":13,"column":50},"end":{"row":13,"column":51},"action":"insert","lines":["-"],"id":23},{"start":{"row":13,"column":51},"end":{"row":13,"column":52},"action":"insert","lines":["z"]}],[{"start":{"row":13,"column":52},"end":{"row":13,"column":53},"action":"insert","lines":["/"],"id":24}],[{"start":{"row":13,"column":53},"end":{"row":13,"column":54},"action":"insert","lines":["g"],"id":25},{"start":{"row":13,"column":54},"end":{"row":13,"column":55},"action":"insert","lines":[","]}],[{"start":{"row":13,"column":55},"end":{"row":13,"column":56},"action":"insert","lines":[" "],"id":26}],[{"start":{"row":13,"column":56},"end":{"row":13,"column":58},"action":"insert","lines":["\"\""],"id":27}],[{"start":{"row":13,"column":59},"end":{"row":13,"column":60},"action":"insert","lines":[";"],"id":28}],[{"start":{"row":13,"column":60},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":29},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"insert","lines":["  "]},{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":["c"]},{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"insert","lines":["o"]},{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["n"]},{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"insert","lines":["s"]},{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"insert","lines":["o"]},{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"insert","lines":["l"]},{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":[","],"id":30}],[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"remove","lines":[","],"id":31}],[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["."],"id":32},{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["l"]},{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["o"]},{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["g"]}],[{"start":{"row":14,"column":13},"end":{"row":14,"column":15},"action":"insert","lines":["()"],"id":33}],[{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"insert","lines":["r"],"id":34},{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["e"]},{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["m"]},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["o"]}],[{"start":{"row":14,"column":14},"end":{"row":14,"column":18},"action":"remove","lines":["remo"],"id":35},{"start":{"row":14,"column":14},"end":{"row":14,"column":28},"action":"insert","lines":["removeNonAlpha"]}],[{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"insert","lines":[";"],"id":36}],[{"start":{"row":13,"column":52},"end":{"row":13,"column":53},"action":"insert","lines":["+"],"id":37}],[{"start":{"row":13,"column":55},"end":{"row":13,"column":56},"action":"insert","lines":["i"],"id":38}],[{"start":{"row":13,"column":49},"end":{"row":13,"column":50},"action":"insert","lines":["["],"id":39},{"start":{"row":13,"column":50},"end":{"row":13,"column":51},"action":"insert","lines":["^"]}],[{"start":{"row":13,"column":55},"end":{"row":13,"column":56},"action":"insert","lines":["]"],"id":40}],[{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"remove","lines":["e"],"id":41},{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"remove","lines":["c"]},{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"remove","lines":["a"]},{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"remove","lines":["p"]},{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"remove","lines":["S"]},{"start":{"row":13,"column":33},"end":{"row":13,"column":34},"action":"remove","lines":["i"]},{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"remove","lines":["t"]},{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"remove","lines":["l"]},{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"remove","lines":["u"]},{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"remove","lines":["M"]},{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"remove","lines":["e"]},{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"remove","lines":["v"]},{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"remove","lines":["o"]},{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"remove","lines":["m"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"remove","lines":["e"]}],[{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"remove","lines":["r"],"id":42}],[{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["s"],"id":43},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["t"]},{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"insert","lines":["r"]}],[{"start":{"row":13,"column":52},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":44},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":14,"column":2},"end":{"row":15,"column":0},"action":"insert","lines":["  let removeMultiSpace = str.replace(/\\s\\s+/g, \" \");",""],"id":45}],[{"start":{"row":14,"column":54},"end":{"row":15,"column":0},"action":"remove","lines":["",""],"id":46}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":4},"action":"remove","lines":["  "],"id":47}],[{"start":{"row":12,"column":51},"end":{"row":12,"column":52},"action":"remove","lines":[";"],"id":48},{"start":{"row":12,"column":50},"end":{"row":12,"column":51},"action":"remove","lines":[")"]},{"start":{"row":12,"column":49},"end":{"row":12,"column":50},"action":"remove","lines":["\""]},{"start":{"row":12,"column":48},"end":{"row":12,"column":49},"action":"remove","lines":[" "]},{"start":{"row":12,"column":47},"end":{"row":12,"column":48},"action":"remove","lines":["\""]},{"start":{"row":12,"column":46},"end":{"row":12,"column":47},"action":"remove","lines":[" "]},{"start":{"row":12,"column":45},"end":{"row":12,"column":46},"action":"remove","lines":[","]},{"start":{"row":12,"column":44},"end":{"row":12,"column":45},"action":"remove","lines":["g"]},{"start":{"row":12,"column":43},"end":{"row":12,"column":44},"action":"remove","lines":["/"]},{"start":{"row":12,"column":42},"end":{"row":12,"column":43},"action":"remove","lines":["+"]},{"start":{"row":12,"column":41},"end":{"row":12,"column":42},"action":"remove","lines":["s"]},{"start":{"row":12,"column":40},"end":{"row":12,"column":41},"action":"remove","lines":["\\"]},{"start":{"row":12,"column":39},"end":{"row":12,"column":40},"action":"remove","lines":["s"]},{"start":{"row":12,"column":38},"end":{"row":12,"column":39},"action":"remove","lines":["\\"]},{"start":{"row":12,"column":37},"end":{"row":12,"column":38},"action":"remove","lines":["/"]},{"start":{"row":12,"column":36},"end":{"row":12,"column":37},"action":"remove","lines":["("]},{"start":{"row":12,"column":35},"end":{"row":12,"column":36},"action":"remove","lines":["e"]},{"start":{"row":12,"column":34},"end":{"row":12,"column":35},"action":"remove","lines":["c"]},{"start":{"row":12,"column":33},"end":{"row":12,"column":34},"action":"remove","lines":["a"]},{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"remove","lines":["l"]},{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"remove","lines":["p"]},{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"remove","lines":["e"]},{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"remove","lines":["r"]},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"remove","lines":["."]},{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"remove","lines":["r"]},{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"remove","lines":["t"]},{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"remove","lines":["s"]},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"remove","lines":[" "]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"remove","lines":["="]},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"remove","lines":[" "]},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"remove","lines":["e"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"remove","lines":["c"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"remove","lines":["a"]},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"remove","lines":["p"]},{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"remove","lines":["S"]},{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"remove","lines":["i"]},{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"remove","lines":["t"]},{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"remove","lines":["l"]},{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"remove","lines":["u"]}],[{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"remove","lines":["M"],"id":49},{"start":{"row":12,"column":11},"end":{"row":12,"column":12},"action":"remove","lines":["e"]},{"start":{"row":12,"column":10},"end":{"row":12,"column":11},"action":"remove","lines":["v"]},{"start":{"row":12,"column":9},"end":{"row":12,"column":10},"action":"remove","lines":["o"]},{"start":{"row":12,"column":8},"end":{"row":12,"column":9},"action":"remove","lines":["m"]},{"start":{"row":12,"column":7},"end":{"row":12,"column":8},"action":"remove","lines":["e"]},{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"remove","lines":["r"]},{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"remove","lines":[" "]},{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"remove","lines":["t"]},{"start":{"row":12,"column":3},"end":{"row":12,"column":4},"action":"remove","lines":["e"]},{"start":{"row":12,"column":2},"end":{"row":12,"column":3},"action":"remove","lines":["l"]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["  "]},{"start":{"row":11,"column":25},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"remove","lines":["r"],"id":50},{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"remove","lines":["t"]},{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"remove","lines":["s"]}],[{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"insert","lines":["r"],"id":51},{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"insert","lines":["e"]},{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"insert","lines":["m"]},{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"insert","lines":["o"]},{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":["v"]}],[{"start":{"row":13,"column":25},"end":{"row":13,"column":30},"action":"remove","lines":["remov"],"id":52},{"start":{"row":13,"column":25},"end":{"row":13,"column":39},"action":"insert","lines":["removeNonAlpha"]}],[{"start":{"row":12,"column":41},"end":{"row":12,"column":42},"action":"insert","lines":["\\"],"id":53},{"start":{"row":12,"column":42},"end":{"row":12,"column":43},"action":"insert","lines":["s"]},{"start":{"row":12,"column":43},"end":{"row":12,"column":44},"action":"insert","lines":["\\"]}],[{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"remove","lines":["a"],"id":54},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"remove","lines":["h"]},{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"remove","lines":["p"]},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"remove","lines":["l"]},{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"remove","lines":["A"]},{"start":{"row":14,"column":22},"end":{"row":14,"column":23},"action":"remove","lines":["n"]},{"start":{"row":14,"column":21},"end":{"row":14,"column":22},"action":"remove","lines":["o"]},{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"remove","lines":["N"]},{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"remove","lines":["e"]},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"remove","lines":["v"]},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"remove","lines":["o"]}],[{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["o"],"id":55},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"insert","lines":["v"]},{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"insert","lines":[" "],"id":56},{"start":{"row":14,"column":21},"end":{"row":14,"column":22},"action":"insert","lines":["m"]}],[{"start":{"row":14,"column":21},"end":{"row":14,"column":22},"action":"remove","lines":["m"],"id":57},{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"remove","lines":[" "]}],[{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"insert","lines":["M"],"id":58}],[{"start":{"row":14,"column":14},"end":{"row":14,"column":21},"action":"remove","lines":["removeM"],"id":59},{"start":{"row":14,"column":14},"end":{"row":14,"column":30},"action":"insert","lines":["removeMultiSpace"]}],[{"start":{"row":14,"column":31},"end":{"row":14,"column":32},"action":"remove","lines":[";"],"id":60},{"start":{"row":14,"column":30},"end":{"row":14,"column":31},"action":"remove","lines":[")"]},{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"remove","lines":["e"]},{"start":{"row":14,"column":28},"end":{"row":14,"column":29},"action":"remove","lines":["c"]},{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"remove","lines":["a"]},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"remove","lines":["p"]},{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"remove","lines":["S"]},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"remove","lines":["i"]},{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"remove","lines":["t"]},{"start":{"row":14,"column":22},"end":{"row":14,"column":23},"action":"remove","lines":["l"]},{"start":{"row":14,"column":21},"end":{"row":14,"column":22},"action":"remove","lines":["u"]},{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"remove","lines":["M"]},{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"remove","lines":["e"]},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"remove","lines":["v"]},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"remove","lines":["o"]},{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"remove","lines":["m"]},{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"remove","lines":["e"]},{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"remove","lines":["r"]},{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"remove","lines":["("]},{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"remove","lines":["g"]},{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"remove","lines":["o"]},{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"remove","lines":["l"]},{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"remove","lines":["."]},{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"remove","lines":["e"]},{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"remove","lines":["l"]},{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"remove","lines":["o"]},{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"remove","lines":["s"]},{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"remove","lines":["n"]},{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"remove","lines":["o"]},{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"remove","lines":["c"]}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "],"id":61},{"start":{"row":13,"column":63},"end":{"row":14,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":14,"column":41},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":62},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"insert","lines":["  "]},{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["c"]},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["o"]},{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"insert","lines":["n"]},{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"insert","lines":["s"]},{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":["o"]},{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"insert","lines":["l"]},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["e"]},{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":["."]},{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["l"]}],[{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":["o"],"id":63},{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"insert","lines":["g"]}],[{"start":{"row":15,"column":13},"end":{"row":15,"column":15},"action":"insert","lines":["()"],"id":64}],[{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"insert","lines":["l"],"id":65},{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"insert","lines":["i"]},{"start":{"row":15,"column":16},"end":{"row":15,"column":17},"action":"insert","lines":["s"]},{"start":{"row":15,"column":17},"end":{"row":15,"column":18},"action":"insert","lines":["t"]}],[{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"insert","lines":["l"],"id":66}],[{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"remove","lines":["l"],"id":67}],[{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"insert","lines":[";"],"id":68}],[{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"remove","lines":[";"],"id":69},{"start":{"row":15,"column":18},"end":{"row":15,"column":19},"action":"remove","lines":[")"]},{"start":{"row":15,"column":17},"end":{"row":15,"column":18},"action":"remove","lines":["t"]},{"start":{"row":15,"column":16},"end":{"row":15,"column":17},"action":"remove","lines":["s"]},{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"remove","lines":["i"]},{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"remove","lines":["l"]},{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"remove","lines":["("]},{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"remove","lines":["g"]},{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"remove","lines":["o"]},{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"remove","lines":["l"]},{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"remove","lines":["."]},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"remove","lines":["e"]}],[{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"remove","lines":["l"],"id":70},{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"remove","lines":["o"]},{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"remove","lines":["s"]},{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"remove","lines":["n"]},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"remove","lines":["o"]}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"remove","lines":["c"],"id":71}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["  "],"id":72},{"start":{"row":14,"column":41},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":41},"end":{"row":14,"column":41},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1614619631178,"hash":"6acaabb75c3cae5b338e9e7e34eadcfdd7cdb49b"}