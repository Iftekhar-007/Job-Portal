import React from "react";
import Thead from "./Thead";

const ApplicationCard = ({ app }) => {
  console.log(app);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}

          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={app.company_logo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{app.title}</div>
                    <div className="text-sm opacity-50">{app.company}</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApplicationCard;
