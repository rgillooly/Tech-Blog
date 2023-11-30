function generateShortUserId() {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substr(2, 5); // Adjust the length as needed
    return `${timestamp}-${randomPart}`;
  }