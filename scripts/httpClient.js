export const get = async (endpoint) => {
  try {
    const response = await fetch(endpoint);

    if (response.ok) {
      // const result = await response.json();
      // return result;
      return await response.json();
    } else {
      throw new Error(
        `Ett fel inträffade: ${response.status}, ${response.statusText}`
      );
    }
  } catch (error) {
    throw new Error(error);
  }
};
