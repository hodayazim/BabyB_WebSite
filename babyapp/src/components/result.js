import React from "react";

function Result() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4 flex-xl-row-reverse Product">
        {params.data.map((p) => {
          return (
            <>
              <div className="col Product">
                <div className="card">
                  <Link className="LinkCard">
                    <img
                      src="/images/MIOS_B2.jpg"
                      className="card-img-top"
                      alt="Product Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.NameProduct}</h5>
                      <p className="card-text">{p.DescriptionProduct}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Result();
