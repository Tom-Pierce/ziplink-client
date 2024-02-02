import ZipLinkDisplay from "./ZipLinkDisplay";

const ZipLinks = () => {
  return (
    <>
      <div className="main">
        <ZipLinkDisplay title={"View all of your ZipLinks"} limit={10} />
      </div>
    </>
  );
};

export default ZipLinks;
