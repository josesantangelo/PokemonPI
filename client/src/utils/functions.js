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
//__________________________________________________________________
