// Simple Functionality Demo

const main = async () => {
  // Test spread and nullish coalescing operators
  const oldArray: number[] = [1,2,3]
  const newArray = [...oldArray, undefined ?? 4]
  console.log(newArray.map((n) => n * 10)); // [10, 20, 30, 40]

  // Test async/await
  const sleep = (ms: number): Promise<void> => new Promise((res) => setTimeout(res, ms));
  const delay = 2;
  console.log(`Sleeping for ${delay} seconds.`);
  await sleep(delay * 1000);
  console.log(`Done sleeping.`);

  // Test Promise.all
  const [a,b] = await Promise.all([Promise.resolve('first-promise'), Promise.resolve('second-promise')]);
  console.log(`Promise results: ${a} ${b}`);
}

main();
