// A threadbare test of Typescript compilation

const sleep = (ms: number): Promise<void> => new Promise((res) => setTimeout(res, ms));

const main = async () => {
    
  const oldArray: number[] = [1,2,3]

  // Test spread and nullish coalescing operators
  const newArray = [...oldArray, undefined ?? 4]

  console.log(newArray.map((n) => n * 10));

  const delay = 3;
  console.log(`Sleeping for ${delay} seconds.`);
  await sleep(delay * 1000);
  console.log(`Done sleeping.`);
}

main();
