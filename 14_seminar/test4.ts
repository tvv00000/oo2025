function fetchData<T>(data: T, delay: number): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Bonus: 20% chance to throw an error
      if (Math.random() < 0.5) {
        reject(new Error("Random fetch error occurred"));
      } else {
        resolve(data);
      }
    }, delay);
  });
}

type User = { id: number; name: string };

async function run() {
  try {
    const user = await fetchData<User>({ id: 1, name: "Alice" }, 100);
    console.log("Fetched user:", user);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

run();

