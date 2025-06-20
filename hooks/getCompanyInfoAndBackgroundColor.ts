export async function getCompanyInfoAndBackgroundColor() {
  const res = await fetch(
    "https://coopwebsitev3-cpdpgqcqaqb6ftcv.centralus-01.azurewebsites.net/app/v1/LandingPage/company-info-and-background-color",
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
