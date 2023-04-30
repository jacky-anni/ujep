import { RegistrationEditForm } from "./RegistrationEditForm";

export const RegislationItemList = ({ data }: any) => {
  return (
    <>
      <div
        key={data.key.id}
        className='col-md-12'
        style={{ cursor: "pointer" }}
      >
        <div className='card'>
          <div className='col p-1 bg-primary'>
            <h4 className='mb-1 bold text-white'>{data.key.nom_faculte}</h4>
            <p className='text-muted text-warning '>
              {data.key.degree.charAt(0).toUpperCase() +
                data.key.degree.slice(1)}
            </p>
          </div>

          <div className='table-responsive'>
            <table className='table table-striped  mb-0'>
              <thead>
                <tr>
                  <th>Niveau</th>
                  <th>Année A.</th>
                  <th>Vacation</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((items: any) => (
                  <tr>
                    <td>
                      {items.niveau === 1
                        ? items.niveau + "ère"
                        : items.niveau + "ème"}{" "}
                      année
                    </td>
                    <td>{items.annee}</td>
                    <td>{items.vacation.toUpperCase()}</td>
                    <td>
                      <RegistrationEditForm registerData={items} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
