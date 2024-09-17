export const sendMessage = async (data: {
  name: string;
  lastname: string;
  email: string;
  message: string;
  subject: string;
  phoneNumber: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/messagehistory/new-message`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the server knows the content type
        },
        body: JSON.stringify(data), // Convert the data to JSON string
        cache: "no-store",
      }
    );

    // Cek apakah respons berhasil (status code 2xx)
    if (!response.ok) {
      // Parsing error dari respons
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData)); // Lempar error untuk di-handle di luar fungsi ini
    }

    return await response.json();
  } catch (error: any) {
    // Parsing error dan menampilkan pesan yang relevan
    const parsedError = JSON.parse(error.message);
    // Bisa juga mengembalikan parsedError atau meng-handle error sesuai kebutuhan
    throw new Error(JSON.stringify(parsedError)); //
  }
};

export const bannerLandingQuery = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/banner/get`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch project list");
  }
  const data = await response.json();
  return data.data;
};
