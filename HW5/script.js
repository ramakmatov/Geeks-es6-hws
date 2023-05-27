    // ДЗ 1

    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        const project = button.parentNode;

        project.remove();
      });
    });

    // ДЗ 2
    const editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(button => {
      button.addEventListener('click', () => {
        const todo = button.parentNode;
        const currentText = todo.firstChild.nodeValue.trim();
        const newText = prompt('Введите новый текст', currentText);
        if (newText !== null && newText.trim() !== '') {
          todo.firstChild.nodeValue = newText.trim();
        }
      });
    });