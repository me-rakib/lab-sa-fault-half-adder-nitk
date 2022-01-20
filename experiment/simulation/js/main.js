// ===== Button and input =====
const getX = document.getElementById("x");
const getY = document.getElementById("y");
const getA = document.getElementById("a");
const getB = document.getElementById("b");
const getC = document.getElementById("c");
const getD = document.getElementById("d");
const getE = document.getElementById("e");
const getF = document.getElementById("f");
const getG = document.getElementById("g");
const getH = document.getElementById("h");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");
const tableBody = document.getElementById("table-body");

// ===== Create a td tag =====
const createTd = (value) => {
  const td = document.createElement("td");
  td.innerText = value;
  td.classList.add("border");
  td.classList.add("border-gray-400");
  return td;
};

// ===== Creating a row =====
const createRow = (x, y, fault, exps, expc, fRes) => {
  const tr = document.createElement("tr");
  const td1 = createTd(`${x} ${y}`);
  tr.appendChild(td1);
  const td2 = createTd(`${fault}`);
  tr.appendChild(td2);
  const td3 = createTd(exps);
  tr.appendChild(td3);
  const td4 = createTd(expc);
  tr.appendChild(td4);
  const td5 = createTd(fRes.s);

  // ===== Wrong Mark for sum =====
  if (exps != fRes.s) {
    td5.classList.add("bg-red-300");
  }
  tr.appendChild(td5);
  const td6 = createTd(fRes.c);

  // ===== Wrong Mark for carry =====
  if (expc != fRes.c) {
    td6.classList.add("bg-red-300");
  }
  tr.appendChild(td6);
  tableBody.appendChild(tr);
};

// ===== Validate Input =====
const checkNum = (num) => {
  if (!isNaN(num) && num != "" && (num == 1) | (num == 0)) {
    return true;
  } else {
    return false;
  }
};

// ===== x XOR y =====
const getSum = (x, y) => {
  if (x == 0 && y == 0) {
    return 0;
  } else if (x == 0 && y == 1) {
    return 1;
  } else if (x == 1 && y == 0) {
    return 1;
  } else if (x == 1 && y == 1) {
    return 0;
  }
};

// ===== x AND y =====
const getCarry = (x, y) => {
  if (x == 0 && y == 0) {
    return 0;
  } else if (x == 0 && y == 1) {
    return 0;
  } else if (x == 1 && y == 0) {
    return 0;
  } else if (x == 1 && y == 1) {
    return 1;
  }
};

// ===== return 1 or 0
const zeroOrOne = (v) => {
  let r;
  if (v.value == 0) {
    r = 0;
  } else {
    r = 1;
  }
  v.value = "";
  return r;
};

// ===== Faults =====
const getFault = () => {
  let faults = [];
  if (checkNum(getA.value)) {
    let fault = {};
    fault.f = "a";
    fault.v = zeroOrOne(getA);
    faults.push(fault);
  }
  if (checkNum(getB.value)) {
    let fault = {};
    fault.f = "b";
    fault.v = zeroOrOne(getB);
    faults.push(fault);
  }
  if (checkNum(getC.value)) {
    let fault = {};
    fault.f = "c";
    fault.v = zeroOrOne(getC);
    faults.push(fault);
  }
  if (checkNum(getD.value)) {
    let fault = {};
    fault.f = "d";
    fault.v = zeroOrOne(getD);
    faults.push(fault);
  }
  if (checkNum(getE.value)) {
    let fault = {};
    fault.f = "e";
    fault.v = zeroOrOne(getE);
    faults.push(fault);
  }
  if (checkNum(getF.value)) {
    let fault = {};
    fault.f = "f";
    fault.v = zeroOrOne(getF);
    faults.push(fault);
  }
  if (checkNum(getG.value)) {
    let fault = {};
    fault.f = "g";
    fault.v = zeroOrOne(getG);
    faults.push(fault);
  }
  if (checkNum(getH.value)) {
    let fault = {};
    fault.f = "h";
    fault.v = zeroOrOne(getH);
    faults.push(fault);
  }
  return faults;
};

// ===== Fault Res =====
const getAllFaults = (f) => {
  let temp = "";
  f.forEach((v) => {
    let txt = `${v.f} SA${v.v}, `;
    temp = temp.concat(txt);
  });
  return temp.slice(0, temp.length - 2);
};

// fault sum
const getFaultSum = (x, y, faults) => {
  let tx = x;
  let ty = y;
  let ts = "";
  faults.forEach((v) => {
    if (v.f == "a") {
      tx = v.v;
    } else if (v.f == "c") {
      tx = v.v;
    } else if (v.f == "b") {
      ty = v.v;
    } else if (v.f == "d") {
      ty = v.v;
    } else if (v.f == "g") {
      ts = v.v;
    }
  });
  if (ts !== "") {
    return ts;
  } else {
    return getSum(tx, ty);
  }
};

// fault carry
const getFaultCarry = (x, y, faults) => {
  let tx = x;
  let ty = y;
  let tc = "";
  faults.forEach((v) => {
    if (v.f == "a") {
      tx = v.v;
    } else if (v.f == "c") {
      tx = v.v;
    } else if (v.f == "b") {
      ty = v.v;
    } else if (v.f == "d") {
      ty = v.v;
    } else if (v.f == "e") {
      tx = v.v;
    } else if (v.f == "f") {
      ty = v.v;
    } else if (v.f == "h") {
      tc = v.v;
    }
  });
  if (tc !== "") {
    return tc;
  } else {
    return getCarry(tx, ty);
  }
};

// ===== Getting Result =====
checkBtn.addEventListener("click", () => {
  const x = getX.value;
  const y = getY.value;
  getX.value = "";
  getY.value = "";

  let faults = getFault();
  const getAllFault = getAllFaults(faults);

  const sum = getFaultSum(x, y, faults);
  const carry = getFaultCarry(x, y, faults);

  let flt = "";
  let fRes = {};
  if (faults.length == 0) {
    flt = "N/A";
    fRes.s = getSum(x, y);
    fRes.c = getCarry(x, y);
  } else {
    fRes.s = getFaultSum(x, y, faults);
    fRes.c = getFaultCarry(x, y, faults);
    flt = getAllFault;
  }

  if (checkNum(x) && checkNum(x)) {
    createRow(x, y, flt, getSum(x, y), getCarry(x, y), fRes);
  }
});

resetBtn.addEventListener("click", () => {
    let len = tableBody.rows.length;
    if (len > 2) {
      for (let i = 2; i < len; i++) {
        tableBody.deleteRow(2);
      }
    }
  });