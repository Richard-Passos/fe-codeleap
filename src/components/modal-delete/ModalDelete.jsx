/* Components */
import {
  AlignCenter,
  ModalDeleteContainer,
  CancelBtn,
  DeleteBtn,
} from "./ModalDelete.style";

export default function ModalDelete({ handleDelete, setIsDeleteModalOpen }) {
  return (
    <AlignCenter>
      <ModalDeleteContainer>
        <h2>Are you sure you want to delete this item?</h2>
        <div className="actions">
          <CancelBtn onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </CancelBtn>

          <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
        </div>
      </ModalDeleteContainer>
    </AlignCenter>
  );
}
