export async function getCompanyInfoAndBackgroundColor() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL2;
  const version = process.env.VERSION;
  const res = await fetch(
    `${baseUrl}/app/v1/LandingPage/company-info-and-background-color`,
    {
      headers: {
        requestIdentity: "demo.com",
        accept: "application/json",
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch company info and background color");
  return res.json();
}
