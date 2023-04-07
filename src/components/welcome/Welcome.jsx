/* Components */
import { AlignCenter, EnterBtn, WelcomeContainer } from "./Welcome.style";
import Link from "next/link";

/* Logic */
import { useState } from "react";
import { FormRow } from "../FormRow";
import { setReduxUsername } from "@/redux/usernameSlice";
import { useDispatch } from "react-redux";

export default function Welcome() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const isEnterEnable = !(username === "");

  return (
    <AlignCenter>
      <WelcomeContainer>
        <h2>Welcome to CodeLeap newtwork!</h2>

        <form>
          <FormRow>
            <label htmlFor="username">Please enter your username</label>

            <input
              type="text"
              id="username"
              placeholder="Jhon doe"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormRow>

          <Link href={!isEnterEnable ? "" : "/codeleap_network"}>
            <EnterBtn
              type="submit"
              disabled={!isEnterEnable}
              onClick={() => dispatch(setReduxUsername(username))}
            >
              ENTER
            </EnterBtn>
          </Link>
        </form>
      </WelcomeContainer>
    </AlignCenter>
  );
}
