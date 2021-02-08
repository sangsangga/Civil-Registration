import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReligions, fetchMaritalStatus } from "../store/actions";

function AddData() {
  const [dukcapilData, setDukcapilData] = React.useState({});
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state, "<<state");
  const handleChange = (e) => {
    let currData = { ...dukcapilData };
    let name = e.target.name;
    currData = { ...currData, [name]: e.target.value };
    setDukcapilData(currData);
    console.log(dukcapilData.NIK);
  };
  React.useState(() => {
    dispatch(fetchReligions());
    dispatch(fetchMaritalStatus());
  }, []);
  return (
    <React.Fragment>
      <h1 className="title has-text-centered"> Add Dukcapil Data</h1>
      <form>
        <div class="field">
          <label class="label">NIK</label>
          <div class="control">
            <input
              name="NIK"
              class="input"
              type="text"
              placeholder="Input NIK"
              value={dukcapilData.NIK}
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-success"
              type="text"
              placeholder="Text input"
              onChange={handleChange}
              value={dukcapilData.name}
              name="name"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>

        <div class="field">
          <label class="label">Maiden Name</label>
          <div class="control has-icons-left has-icons-right">
            <input
              name="maiden_name"
              class="input is-success"
              type="text"
              placeholder="Text input"
              value={dukcapilData.maiden_name}
              onChange={handleChange}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>

        <div class="field">
          <label class="label">Date of Birth</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-success"
              type="date"
              placeholder="Text input"
              name="birth_date"
              onChange={handleChange}
              value={dukcapilData.birth_date}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>
        <div class="field">
          <div class="control">
            <label className="label">Gender</label>
            <label class="radio">
              <input
                onChange={handleChange}
                type="radio"
                name="gender"
                value="Male"
                checked={dukcapilData.gender === "Male" ? true : false}
              />
              Male
            </label>
            <label class="radio">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                checked={dukcapilData.gender === "Female" ? true : false}
              />
              Female
            </label>
          </div>
        </div>

        <div class="field">
          <label class="label">Religion</label>
          <div class="control">
            <div class="select">
              <select name="religion">
                <option selected disabled>
                  Choose Religion
                </option>
                {state.religions.map((religion) => {
                  return (
                    <option
                      selected={dukcapilData.religion === religion.id}
                      value={religion.id}
                    >
                      {religion.religion_name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Status</label>
          <div class="control">
            <div class="select">
              <select name="marital_status">
                <option disabled>Choose Status</option>
                {state.maritalStatus.map((status) => {
                  return (
                    <option
                      selected={dukcapilData.marital_status === status.id}
                      value={status.id}
                    >
                      {status.marital_status_desc}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" type="submit">
              Submit
            </button>
          </div>
          <div class="control">
            <button class="button is-danger is-light">Cancel</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default AddData;
