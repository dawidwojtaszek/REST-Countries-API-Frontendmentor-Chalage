import { Helmet } from "react-helmet-async";
export const SEO = ({ title }) => {
  return (
    <>
      <Helmet>
        <html lang="en"></html>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </>
  );
};
