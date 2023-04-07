/* Components */
import {
  AlignCenter,
  ModalEditContainer,
  CancelBtn,
  SaveBtn,
} from "./ModalEdit.style";
import { FormRow } from "../FormRow";

export default function ModalEdit({
  setEditedPost,
  setIsEditModalOpen,
  isSaveEnable,
  handleEdit,
}) {
  return (
    <AlignCenter>
      <ModalEditContainer>
        <h3>Edit item</h3>

        <form>
          <FormRow>
            <label htmlFor="modalTitle">Title</label>

            <input
              type="text"
              id="modalTitle"
              placeholder="Hello world"
              onChange={(e) =>
                setEditedPost((prevState) => {
                  return { ...prevState, title: e.target.value };
                })
              }
            />
          </FormRow>

          <FormRow>
            <label htmlFor="modalContent">Content</label>

            <textarea
              id="modalContent"
              placeholder="Content here"
              rows="4"
              onChange={(e) =>
                setEditedPost((prevPost) => {
                  return { ...prevPost, content: e.target.value };
                })
              }
            />
          </FormRow>

          <div className="actions">
            <CancelBtn
              onClick={(e) => {
                e.preventDefault();
                setIsEditModalOpen(false);
              }}
            >
              Cancel
            </CancelBtn>

            <SaveBtn
              type="submit"
              disabled={!isSaveEnable}
              onClick={handleEdit}
            >
              Save
            </SaveBtn>
          </div>
        </form>
      </ModalEditContainer>
    </AlignCenter>
  );
}
