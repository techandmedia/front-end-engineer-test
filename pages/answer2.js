export default function Answer() {
  return <div>OK</div>;
}

class ImmutableObject {
  // This is an aysnc method
  async getDataFromAPI() {
    //   With an async method, we called another function with await
    const result = await fetch("URL", { params: "SOME PARAMATERS" });
    const converted = result.json();

    // Console log will trigger after the result is received, either resolved or rejected
    console.log(converted);
  }

  // Multiple Async Pararel function
  async getDataFromAPI() {
    //  When we have multiple functions with async method, we wrap it with Promise all
    // To ensure that they are finished pararel
    await Promise.all(
      await fetch("URL", { params: "SOME PARAMATERS" }),
      await fetch("URL2", { params: "SOME PARAMATERS2" })
    )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  // This is a series of function that go through each line
  // which no need to wait for the other line to finish
  calculateNumber(a, b) {
    const total = a + b;
    console.log(total);
  }
}
