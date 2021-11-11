//ORDER FUNCTIONS
export const alphabeticOrder = (arr, order) => {
  let result;

  if (order === "a") {
    result = arr.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (order === "z") {
    result = arr.sort((a, b) => b.name.localeCompare(a.name));
  }

  return result;
};

export function sorterOne(a, b) {
  if (typeof b.id === "string") {
    return -1;
  }
  if (a.id < b.id) {
    return -1;
  } else {
    return 1;
  }
}

export function sorterForty(a, b) {
  if (a.id < b.id) {
    return 1;
  } else {
    return -1;
  }
}

export function sorterWeakest(a, b) {
  if (a.attack < b.attack) {
    return -1;
  } else {
    return 1;
  }
}

export function sorterStrongest(a, b) {
  if (a.attack < b.attack) {
    return 1;
  } else {
    return -1;
  }
}

export const apiOrDB = (arr, value, empty) => {
  let filtered;
  if (value === "api") {
    filtered = arr.filter((element) => typeof element.id === "number");
  }
  if (value === "DB") {
    filtered = arr.filter((element) => element.id.length > 5);
  }

  if (value === "all") {
    filtered = arr.filter((element) => element.id);
  }

  return filtered.length ? filtered : empty;
};
//__________________________________________________________________
