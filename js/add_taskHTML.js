/**
 * creates the contackt list
 * 
 * @param {number} i number of the contact in the array
 * @param {string} firstAndSecondLetter first and second letter
 * @param {string} color color code of the contactes
 * @returns {string} HTML code
 */
function renderAssingnedToDropdownListHTML(i, firstAndSecondLetter, color) {
  return /*html */ `
    <div class="dropdownContacts" id="dropdownContact${i}" onclick="setContactSelected(${i})">
      <div class="dropdownContactNameConatiner">
        <div class="contactsIcon" style="background-color: ${color}">${firstAndSecondLetter}</div>
        <p>${contacts[i]["name"]}</p>
      </div>
      <img id="dropdownContactImg${i}" src="./assets/img/checkbox_unchecked.svg" alt="checkbox_unchecked">
    </div>
  `;
}

/**
 * creates the contackt icons
 * 
 * @param {number} i number of the contact in the array
 * @param {string} color color code of the contactes
 * @returns {string} HTML code
 */
function renderSelectedContactsIconsHTML(i, color) {
  return /* html */ `
  <div class="contactsIcon" style="background-color: ${color}">${getFirstAndSecondLetter(i)}</div>
`;
}

/**
 * creates the category list
 * 
 * @param {*} i number of the category in the array
 * @returns {string} HTML code
 */
function renderCategoryDropdownListHTML(i) {
  return /* html */ `
    <div class="dropdownCategory" onclick="setSelectedCategory(${i})">
      <p>${category[i]}</p>
    </div>
  `;
}

/**
 * creates the Subtasks Done And Cancel Icons
 * 
 * @param {number} number of the subtask in the array
 * @returns {string} HTML code
 */
function showSubtasksDoneAndCancelIcons(index) {
  return /* html */ `
 <img class="subtasksInputMenuimg" onclick="clearSubtaskInputField()" src="./assets/img/subtasks_cancel_icon.svg" alt="cancel_icon">
 <img src="./assets/img/subtasks_seperator.svg" alt="subtasks_seperator">
 <img class="subtasksInputMenuimg" onclick="addSubtask(${index})" src="./assets/img/subtasks_done_icon.svg" alt="done_icon">
`;
}

/**
 * creates the Subtasks Add Icons
 * 
 * @returns {string} HTML code
 */
function showSubtasksAddIcon() {
  return '<img src="./assets/img/subtasks_add_icon.svg" alt="add_icon">';
}

/**
 * creates the subtask list
 * 
 * @param {number} i of the subtask in the array
 * @returns {string} HTML code
 */
function renderSubtasksHTML(i) {
  return /* html */ `
  <div id="subtask${i}" ondblclick="editSubtask(${i})">
    <div class="subtask">
      <div class="subtaskText">
        <p>&bull;</p>
        <P>${subtasks[i]}</P>
      </div>
      <div class="subtaskMenu">
        <img src="./assets/img/subtasks_edit_icon.svg" onclick="editSubtask(${i})" alt="edit_icon">
        <img src="./assets/img/subtasks_seperator.svg" alt="subtasks_seperator">
        <img src="./assets/img/subtasks_delete_icon.svg" onclick="deleteSubtask(${i})" alt="delete_icon">
      </div>
    </div>
  </div>
  `;
}

/**
 * creates the subtask edit field
 * 
 * @param {number} i of the subtask in the array 
 * @returns {string} HTML code
 */
function editSubtaskHTML(i) {
  return /* html */ `
  <div class="subtaskEdit" id="subtaskEdit">
    <input type="text" id="editSubtask${i}" value="${subtasks[i]}">
    <div>
      <img src="./assets/img/subtasks_delete_icon.svg" onclick="deleteSubtask(${i})" alt="delete_icon">
      <img src="./assets/img/subtasks_seperator.svg" alt="subtasks_seperator">
      <img src="./assets/img/subtasks_done_icon.svg" onclick="editSubtaskDone(${i})" alt="done_icon">
    </div>
  </div>
 `;
}

/**
 * creates the AddTask container
 * 
 * @returns {string} HTML code
 */
function renderAddTaskHTML(){
  return /* html */ `
  <div class="addTasks">
    <div class="leftContainer">
      <div class="taskTitle">
        <div class="inputContainer">
          <p>Title<span style="color: #FF8190;">*</span></p>
          <div class="inputField" id="titleField">
            <input type="text" id="titleInputField" onkeypress="addTaskOnEnter(event)" onkeyup="setBlueBorder('titleInputField', 'titleField'), clearRequiredText('requiredTextTitle')" placeholder="Enter a title"/>
          </div>
        </div>
        <p class="fildIisRequiredText" id="requiredTextTitle"></p>
      </div>
      <div class="inputContainer">
        <p>Description</p>
        <textarea class="descriptionTextArea" id="descriptionTextArea" onkeypress="addTaskOnEnter(event)" onkeyup="setBlueBorder('descriptionTextArea', 'descriptionTextArea')" placeholder="Enter a Descripton"></textarea>
      </div>
      <div class="inputContainer assingnedToConatiner">
        <p>Assingned to</p>
        <div>
          <div class="inputField dropdown">
            <input type="text" id="contactInput" onkeyup="filterAssingnedToDropdownList()" placeholder="Add a Contact"/>
            <img class="dropDownIcon" id="assignedToDropdownIcon" src="./assets/img/arrow_drop_down.svg" alt="" />
          </div>
          <div class="dropdownContentAssignedTo" id="dropdownContentAssignedTo">
            <!-- hier wird über die function renderAssingnedToDropdownList() eingefügt-->
          </div>
        </div>
        <div class="contactesIconsContainer" id="showSelectedDropdownContact">
          <!-- hier wird über die function renderSelectedContactsIcons() eingefügt-->
        </div>
      </div>
    </div>
    <div class="seperatorContainer">
      <img src="./assets/img/seperator_add_task.svg" alt="sepertor" />
    </div>
    <div class="rightContainer">
      <div class="taskDueDate">
        <div class="inputContainer">
          <p>Due date<span style="color: #FF8190;">*</span></p>
          <div class="inputField" id="duedateField">
            <input class="duedateInputField" id="duedateInputField" type="date" onkeypress="addTaskOnEnter(event)" onkeyup="changeColorDuedate()" onchange="setBlueBorder('duedateInputField', 'duedateField'), clearRequiredText('requiredTextDuedate'), changeColorDuedate()"/>
          </div>
        </div>
        <p class="fildIisRequiredText" id="requiredTextDuedate"></p>
      </div>
      <div class="taskPrio">
        <p>Prio</p>
        <div class="prioButtonConatiner">
          <div class="prioButton" id="prioButtonHigh" onclick="setPrioButton('high')">
            <p>Urgent</p>
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none">
              <g clip-path="url(#clip0_156_1031)">
                <path
                  d="M19.2597 15.4466C19.0251 15.447 18.7965 15.3722 18.6077 15.2331L10.3556 9.14989L2.10356 15.2331C1.98771 15.3186 1.85613 15.3806 1.71633 15.4153C1.57652 15.4501 1.43124 15.457 1.28877 15.4356C1.14631 15.4142 1.00944 15.3651 0.885997 15.2908C0.762552 15.2166 0.654943 15.1189 0.569314 15.0031C0.483684 14.8873 0.421712 14.7558 0.386936 14.6161C0.352159 14.4764 0.345259 14.3313 0.366629 14.1889C0.409788 13.9014 0.565479 13.6428 0.799451 13.47L9.70356 6.89951C9.89226 6.75992 10.1208 6.68457 10.3556 6.68457C10.5904 6.68457 10.819 6.75992 11.0077 6.89951L19.9118 13.47C20.0977 13.6069 20.2356 13.799 20.3057 14.0189C20.3759 14.2388 20.3747 14.4752 20.3024 14.6944C20.2301 14.9135 20.0904 15.1043 19.9031 15.2394C19.7159 15.3745 19.4907 15.447 19.2597 15.4466Z"
                  fill="#FF3D00"
                />
                <path
                  d="M19.2597 9.69746C19.0251 9.69786 18.7965 9.62301 18.6077 9.48391L10.3556 3.40075L2.10356 9.48391C1.86959 9.65672 1.57651 9.72958 1.28878 9.68645C1.00105 9.64332 0.742254 9.48775 0.569318 9.25395C0.396382 9.02015 0.323475 8.72728 0.366634 8.43976C0.409793 8.15225 0.565483 7.89364 0.799455 7.72084L9.70356 1.15036C9.89226 1.01077 10.1208 0.935425 10.3556 0.935425C10.5904 0.935425 10.819 1.01077 11.0077 1.15036L19.9118 7.72084C20.0977 7.85775 20.2356 8.04987 20.3057 8.26975C20.3759 8.48962 20.3747 8.72603 20.3024 8.94521C20.2301 9.1644 20.0904 9.35515 19.9031 9.49024C19.7159 9.62533 19.4907 9.69785 19.2597 9.69746Z"
                  fill="#FF3D00"
                />
              </g>
              <defs>
                <clipPath id="clip0_156_1031">
                  <rect width="20" height="14.5098" fill="white" transform="translate(0.355469 0.936768)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="prioButton" id="prioButtonMedium" onclick="setPrioButton('medium')">
            <p>Medium</p>
            <svg width="21" height="8" viewBox="0 0 21 8" fill="none">
              <g clip-path="url(#clip0_156_1016)">
                <path
                  d="M19.7596 7.91693H1.95136C1.66071 7.91693 1.38197 7.80063 1.17645 7.59362C0.970928 7.3866 0.855469 7.10584 0.855469 6.81308C0.855469 6.52032 0.970928 6.23955 1.17645 6.03254C1.38197 5.82553 1.66071 5.70923 1.95136 5.70923H19.7596C20.0502 5.70923 20.329 5.82553 20.5345 6.03254C20.74 6.23955 20.8555 6.52032 20.8555 6.81308C20.8555 7.10584 20.74 7.3866 20.5345 7.59362C20.329 7.80063 20.0502 7.91693 19.7596 7.91693Z"
                  fill="#FFA800"
                />
                <path
                  d="M19.7596 2.67376H1.95136C1.66071 2.67376 1.38197 2.55746 1.17645 2.35045C0.970928 2.14344 0.855469 1.86267 0.855469 1.56991C0.855469 1.27715 0.970928 0.996386 1.17645 0.789374C1.38197 0.582363 1.66071 0.466064 1.95136 0.466064L19.7596 0.466064C20.0502 0.466064 20.329 0.582363 20.5345 0.789374C20.74 0.996386 20.8555 1.27715 20.8555 1.56991C20.8555 1.86267 20.74 2.14344 20.5345 2.35045C20.329 2.55746 20.0502 2.67376 19.7596 2.67376Z"
                  fill="#FFA800"
                />
              </g>
              <defs>
                <clipPath id="clip0_156_1016">
                  <rect width="20" height="7.45098" fill="white" transform="translate(0.855469 0.466064)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="prioButton" id="prioButtonLow" onclick="setPrioButton('low')">
            <p>Low</p>
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none">
              <path
                d="M10.8555 9.69779C10.6209 9.69819 10.3923 9.62335 10.2035 9.48427L1.30038 2.91453C1.18454 2.82898 1.0867 2.72146 1.01245 2.59812C0.938193 2.47478 0.888977 2.33803 0.867609 2.19569C0.824455 1.90821 0.897354 1.61537 1.07027 1.3816C1.24319 1.14782 1.50196 0.992265 1.78965 0.949143C2.07734 0.906021 2.3704 0.978866 2.60434 1.15165L10.8555 7.23414L19.1066 1.15165C19.2224 1.0661 19.354 1.00418 19.4938 0.969432C19.6336 0.934685 19.7788 0.927791 19.9213 0.949143C20.0637 0.970495 20.2006 1.01967 20.324 1.09388C20.4474 1.16808 20.555 1.26584 20.6407 1.3816C20.7263 1.49735 20.7883 1.62882 20.823 1.7685C20.8578 1.90818 20.8647 2.05334 20.8433 2.19569C20.822 2.33803 20.7727 2.47478 20.6985 2.59812C20.6242 2.72146 20.5264 2.82898 20.4106 2.91453L11.5075 9.48427C11.3186 9.62335 11.0901 9.69819 10.8555 9.69779Z"
                fill="#7AE229"
              />
              <path
                d="M10.8555 15.4463C10.6209 15.4467 10.3923 15.3719 10.2035 15.2328L1.30038 8.66307C1.06644 8.49028 0.910763 8.2317 0.867609 7.94422C0.824455 7.65674 0.897354 7.3639 1.07027 7.13013C1.24319 6.89636 1.50196 6.7408 1.78965 6.69768C2.07734 6.65456 2.3704 6.7274 2.60434 6.90019L10.8555 12.9827L19.1066 6.90019C19.3405 6.7274 19.6336 6.65456 19.9213 6.69768C20.209 6.7408 20.4678 6.89636 20.6407 7.13013C20.8136 7.3639 20.8865 7.65674 20.8433 7.94422C20.8002 8.2317 20.6445 8.49028 20.4106 8.66307L11.5075 15.2328C11.3186 15.3719 11.0901 15.4467 10.8555 15.4463Z"
                fill="#7AE229"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="inputContainer categoryContainer">
        <p>Category<span style="color: #FF8190;">*</span></p>
        <div>
          <div class="inputField" id="categoryField" onclick="removeBorader('categoryField')">
            <input type="text" id="inputFieldCategory" onkeypress="addTaskOnEnter(event)" placeholder="Select task category" />
            <img class="dropDownIcon" id="categoryDropdownIcon" src="./assets/img/arrow_drop_down.svg" alt="drop down icon" />
          </div>
          <div class="dropdownContenCategory" id="dropdownContenCategory">
            <!-- hier wird über die function renderCategoryDropdownList() eingefügt-->
          </div>
        </div>
      </div>
      <div class="inputContainer">
        <p>Subtasks</p>
        <div class="inputField" id="subtaskField">
          <input type="text" id="subtasksInput" onkeypress="addSubtaskOnEnter(event)" onkeyup="showSubtasksDoneAndCancel(), setBlueBorder('subtasksInput', 'subtaskField')" placeholder="Add new subtask" />
          <div class="subtasksInputMenu" id="subtasksInputMenu">
            <img src="./assets/img/subtasks_add_icon.svg" alt="add_icon" />
          </div>
        </div>
        <div>
          <div class="subtasksList" id="subtasksList"></div>
        </div>
      </div>
    </div>
    <button style="display: none"></button>
  </div>
  `
}

/**
 * creates the AddTaskMobile container
 * 
 * @returns {string} HTML code
 */
function renderAddTaskMobileHTML() {
  return /* html */ `
  <div class="addTasks">
    <div class="taskTitle">
      <div class="inputContainer">
        <p>Title<span style="color: #FF8190;">*</span></p>
        <div class="inputField" id="titleField">
          <input type="text" id="titleInputField" onkeyup="setBlueBorder('titleInputField', 'titleField'), clearRequiredText('requiredTextTitle')" placeholder="Enter a title" required />
        </div>
      </div>
      <p class="fildIisRequiredText" id="requiredTextTitle"></p>
    </div>

    <div class="inputContainer">
      <p>Description</p>
      <textarea class="descriptionTextArea" id="descriptionTextArea" onkeyup="setBlueBorder('descriptionTextArea', 'descriptionTextArea')" placeholder="Enter a Descripton"></textarea>
    </div>

    <div class="taskPrio">
      <p>Prio</p>
      <div class="prioButtonConatiner">
        <div class="prioButton" id="prioButtonHigh" onclick="setPrioButton('high')">
          <p>Urgent</p>
          <svg width="21" height="16" viewBox="0 0 21 16" fill="none">
            <g clip-path="url(#clip0_156_1031)">
              <path
                d="M19.2597 15.4466C19.0251 15.447 18.7965 15.3722 18.6077 15.2331L10.3556 9.14989L2.10356 15.2331C1.98771 15.3186 1.85613 15.3806 1.71633 15.4153C1.57652 15.4501 1.43124 15.457 1.28877 15.4356C1.14631 15.4142 1.00944 15.3651 0.885997 15.2908C0.762552 15.2166 0.654943 15.1189 0.569314 15.0031C0.483684 14.8873 0.421712 14.7558 0.386936 14.6161C0.352159 14.4764 0.345259 14.3313 0.366629 14.1889C0.409788 13.9014 0.565479 13.6428 0.799451 13.47L9.70356 6.89951C9.89226 6.75992 10.1208 6.68457 10.3556 6.68457C10.5904 6.68457 10.819 6.75992 11.0077 6.89951L19.9118 13.47C20.0977 13.6069 20.2356 13.799 20.3057 14.0189C20.3759 14.2388 20.3747 14.4752 20.3024 14.6944C20.2301 14.9135 20.0904 15.1043 19.9031 15.2394C19.7159 15.3745 19.4907 15.447 19.2597 15.4466Z"
                fill="#FF3D00"
              />
              <path
                d="M19.2597 9.69746C19.0251 9.69786 18.7965 9.62301 18.6077 9.48391L10.3556 3.40075L2.10356 9.48391C1.86959 9.65672 1.57651 9.72958 1.28878 9.68645C1.00105 9.64332 0.742254 9.48775 0.569318 9.25395C0.396382 9.02015 0.323475 8.72728 0.366634 8.43976C0.409793 8.15225 0.565483 7.89364 0.799455 7.72084L9.70356 1.15036C9.89226 1.01077 10.1208 0.935425 10.3556 0.935425C10.5904 0.935425 10.819 1.01077 11.0077 1.15036L19.9118 7.72084C20.0977 7.85775 20.2356 8.04987 20.3057 8.26975C20.3759 8.48962 20.3747 8.72603 20.3024 8.94521C20.2301 9.1644 20.0904 9.35515 19.9031 9.49024C19.7159 9.62533 19.4907 9.69785 19.2597 9.69746Z"
                fill="#FF3D00"
              />
           </g>
            <defs>
              <clipPath id="clip0_156_1031">
                <rect width="20" height="14.5098" fill="white" transform="translate(0.355469 0.936768)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="prioButton" id="prioButtonMedium" onclick="setPrioButton('medium')">
          <p>Medium</p>
          <svg width="21" height="8" viewBox="0 0 21 8" fill="none">
            <g clip-path="url(#clip0_156_1016)">
              <path
                d="M19.7596 7.91693H1.95136C1.66071 7.91693 1.38197 7.80063 1.17645 7.59362C0.970928 7.3866 0.855469 7.10584 0.855469 6.81308C0.855469 6.52032 0.970928 6.23955 1.17645 6.03254C1.38197 5.82553 1.66071 5.70923 1.95136 5.70923H19.7596C20.0502 5.70923 20.329 5.82553 20.5345 6.03254C20.74 6.23955 20.8555 6.52032 20.8555 6.81308C20.8555 7.10584 20.74 7.3866 20.5345 7.59362C20.329 7.80063 20.0502 7.91693 19.7596 7.91693Z"
                fill="#FFA800"
              />
              <path
                d="M19.7596 2.67376H1.95136C1.66071 2.67376 1.38197 2.55746 1.17645 2.35045C0.970928 2.14344 0.855469 1.86267 0.855469 1.56991C0.855469 1.27715 0.970928 0.996386 1.17645 0.789374C1.38197 0.582363 1.66071 0.466064 1.95136 0.466064L19.7596 0.466064C20.0502 0.466064 20.329 0.582363 20.5345 0.789374C20.74 0.996386 20.8555 1.27715 20.8555 1.56991C20.8555 1.86267 20.74 2.14344 20.5345 2.35045C20.329 2.55746 20.0502 2.67376 19.7596 2.67376Z"
                fill="#FFA800"
              />
            </g>
            <defs>
              <clipPath id="clip0_156_1016">
                <rect width="20" height="7.45098" fill="white" transform="translate(0.855469 0.466064)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="prioButton" id="prioButtonLow" onclick="setPrioButton('low')">
          <p>Low</p>
          <svg width="21" height="16" viewBox="0 0 21 16" fill="none">
            <path
              d="M10.8555 9.69779C10.6209 9.69819 10.3923 9.62335 10.2035 9.48427L1.30038 2.91453C1.18454 2.82898 1.0867 2.72146 1.01245 2.59812C0.938193 2.47478 0.888977 2.33803 0.867609 2.19569C0.824455 1.90821 0.897354 1.61537 1.07027 1.3816C1.24319 1.14782 1.50196 0.992265 1.78965 0.949143C2.07734 0.906021 2.3704 0.978866 2.60434 1.15165L10.8555 7.23414L19.1066 1.15165C19.2224 1.0661 19.354 1.00418 19.4938 0.969432C19.6336 0.934685 19.7788 0.927791 19.9213 0.949143C20.0637 0.970495 20.2006 1.01967 20.324 1.09388C20.4474 1.16808 20.555 1.26584 20.6407 1.3816C20.7263 1.49735 20.7883 1.62882 20.823 1.7685C20.8578 1.90818 20.8647 2.05334 20.8433 2.19569C20.822 2.33803 20.7727 2.47478 20.6985 2.59812C20.6242 2.72146 20.5264 2.82898 20.4106 2.91453L11.5075 9.48427C11.3186 9.62335 11.0901 9.69819 10.8555 9.69779Z"
              fill="#7AE229"
            />
            <path
              d="M10.8555 15.4463C10.6209 15.4467 10.3923 15.3719 10.2035 15.2328L1.30038 8.66307C1.06644 8.49028 0.910763 8.2317 0.867609 7.94422C0.824455 7.65674 0.897354 7.3639 1.07027 7.13013C1.24319 6.89636 1.50196 6.7408 1.78965 6.69768C2.07734 6.65456 2.3704 6.7274 2.60434 6.90019L10.8555 12.9827L19.1066 6.90019C19.3405 6.7274 19.6336 6.65456 19.9213 6.69768C20.209 6.7408 20.4678 6.89636 20.6407 7.13013C20.8136 7.3639 20.8865 7.65674 20.8433 7.94422C20.8002 8.2317 20.6445 8.49028 20.4106 8.66307L11.5075 15.2328C11.3186 15.3719 11.0901 15.4467 10.8555 15.4463Z"
              fill="#7AE229"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="taskDueDate">
      <div class="inputContainer">
        <p>Due date<span style="color: #FF8190;">*</span></p>
        <div class="inputField" id="duedateField">
        <input class="duedateInputField" id="duedateInputField" type="date" onkeyup="changeColorDuedate()" onchange="setBlueBorder('duedateInputField', 'duedateField'), clearRequiredText('requiredTextDuedate'), changeColorDuedate()"/>
        </div>
      </div>
      <p class="fildIisRequiredText" id="requiredTextDuedate"></p>
    </div>

    <div class="inputContainer categoryContainer">
      <p>Category<span style="color: #FF8190;">*</span></p>
      <div>
        <div class="inputField" id="categoryField" onclick="removeBorader('categoryField')">
          <input type="text" id="inputFieldCategory" placeholder="Select task category" />
          <img class="dropDownIcon" id="categoryDropdownIcon" src="./assets/img/arrow_drop_down.svg" alt="drop down icon" />
        </div>
        <div class="dropdownContenCategory" id="dropdownContenCategory">
          <!-- hier wird über die function renderCategoryDropdownList() eingefügt-->
        </div>
      </div>
    </div>

    <div class="inputContainer assingnedToConatiner">
      <p>Assingned to</p>
      <div>
        <div class="inputField dropdown">
          <input type="text" id="contactInput" onkeyup="filterAssingnedToDropdownList()" placeholder="Add a Contact"/>
          <img class="dropDownIcon" id="assignedToDropdownIcon" src="./assets/img/arrow_drop_down.svg" alt="" />
        </div>
        <div class="dropdownContentAssignedTo" id="dropdownContentAssignedTo">
          <!-- hier wird über die function renderAssingnedToDropdownList() eingefügt-->
        </div>
      </div>
      <div class="contactesIconsContainer" id="showSelectedDropdownContact">
        <!-- hier wird über die function renderSelectedContactsIcons() eingefügt-->
      </div>
    </div>
      
    <div class="inputContainer">
      <p>Subtasks</p>
      <div class="inputField" id="subtaskField">
        <input type="text" id="subtasksInput" onkeyup="showSubtasksDoneAndCancel(), setBlueBorder('subtasksInput', 'subtaskField')" placeholder="Add new subtask" />
        <div class="subtasksInputMenu" id="subtasksInputMenu">
          <img src="./assets/img/subtasks_add_icon.svg" alt="add_icon" />
        </div>
      </div>
      <div>
        <div class="subtasksList" id="subtasksList"></div>
      </div>
    </div>
  </div>
`;
}
