let idInfo: string[] = [];

export function id(id: number): string[] {
  const firstNumber = parseInt(id.toString()[0], 10);
  const BY = id.toString().slice(1, 3);
  const BM = id.toString().slice(3, 5);
  const BD = id.toString().slice(5, 7);
  const serialNumber = id.toString().slice(7, 10);
  const checkNumber = id.toString()[10]

  let gender: string;
  if (firstNumber % 2 == 0) {
    gender = 'female';
  } else {
    gender = 'male';
  }

  idInfo.push(gender, BY, BM,BD, serialNumber, checkNumber);
  return idInfo;
}
