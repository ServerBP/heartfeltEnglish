const load = async ({ params }) => {
  try {
    return {
      eventid: params.eventid
    };
  } catch (e) {
    console.error("Error loading event:", e);
  }
};
export {
  load
};
