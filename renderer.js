document.addEventListener('DOMContentLoaded', () => {
  const jobList = document.getElementById('job-list');
  const searchInput = document.getElementById('search');
  const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
  const selectedFiltersDiv = document.getElementById('selected-filters');

  const clearButton = document.createElement('button');
  clearButton.className = "delete"
  clearButton.textContent = 'Clear';
  clearButton.style.display = 'none'; // Initially hidden
  clearButton.style.marginRight = '128px';
  clearButton.style.marginTop = '-51px';
  clearButton.style.padding = '5px 10px';
  clearButton.style.float = 'right';
  clearButton.style.textDecoration = 'underline';
  clearButton.style.border = 'none';
  clearButton.style.borderRadius = '3px';
  clearButton.style.color = 'rgb(81, 161, 128)';
  clearButton.style.cursor = 'pointer';
  clearButton.style.fontSize = '16px';
  clearButton.style.backgroundColor = 'white';
  clearButton.style.transform = 'translateY(-67px)';
  // Add Clear button to the selectedFiltersDiv container
  selectedFiltersDiv.parentElement.insertBefore(clearButton, selectedFiltersDiv);

  const jobs = [
      { Image: 'photosnap.svg', title: 'Senior Frontend Developer', text: 'NEW!', text1: 'FEATURED', company: '<strong>Photosnap</strong>', location: '<strong>USA Only</strong>', type: 'Full Time', button1: 'HTML', button2: 'CSS', button3: 'JavaScript', button4: 'Frontend' },
      { Image: 'manage.svg', title: 'Full Stack Developer', text: 'NEW!', text1: 'FEATURED', company: '<strong>Manage</strong>', location: '<strong>Remote</strong>', type: 'Part Time', button1: 'HTML' },
      { Image: 'account.svg', title: 'Junior Frontend Developer', text: 'NEW!', company: '<strong>Account</strong>', location: '<strong>USA Only</strong>', type: 'Part Time', button1: 'HTML', button2: 'CSS' },
      { Image: 'myhome.svg', title: 'Junior Frontend Developer', company: '<strong>MyHome</strong>', location: '<strong>USA Only</strong>', type: 'Contract', button2: 'CSS', button4: 'Frontend' },
      { Image: 'loop-studios.svg', title: 'Software Engineer', company: '<strong>Loop Studios</strong>', location: '<strong>Worldwide</strong>', type: 'Full Time', button1: 'HTML', button2: 'CSS', button3: 'JavaScript', button4: 'Frontend' },
      { Image: 'faceit.svg', title: 'Junior Backend Developer', company: '<strong>FaceIt</strong>', location: '<strong>UK Only</strong>', type: 'Full Time', button2: 'CSS', button3: 'JavaScript' },
      { Image: 'shortly.svg', title: 'Junior Developer', company: '<strong>Shortly</strong>', location: '<strong>Worldwide</strong>', type: 'Full Time', button1: 'HTML', button2: 'CSS' },
      { Image: 'insure.svg', title: 'Junior Frontend Developer', company: '<strong>Insure</strong>', location: '<strong>USA Only</strong>', type: 'Full Time', button1: 'HTML', button2: 'CSS', button4: 'Frontend' },
      { Image: 'eyecam-co.svg', title: 'Full Stack Engineer', company: '<strong>Eyecam Co.</strong>', location: '<strong>Worldwide</strong>', type: 'Full Time', button1: 'HTML', button2: 'CSS', button3: 'JavaScript', button4: 'Frontend' },
      { Image: 'the-air-filter-company.svg', title: 'Front-End Dev', company: '<strong>The Air Filter Company</strong>', location: '<strong>Worldwide</strong>', type: 'Part Time', button1: 'HTML', button2: 'CSS', button3: 'JavaScript', button4: 'Frontend' },
  ];

  function displayJobs(jobData) {
      jobList.innerHTML = '';
      jobData.forEach(job => {
          const jobItem = document.createElement('div');
          jobItem.classList.add('job-item');

          jobItem.innerHTML = `
              <div class="info" style="align-items: center;">
                  <img class="job-logo" src="${job.Image}" alt="logo">
                  <div class="bttns" style="display: flex; justify-content: space-between; align-items: center;">
                      <div>
                          <p class="job-company">${job.company}
                              ${job.text ? `<span class="job-text" style="color: white;border-radius: 25px;font-size: 14px;background-color:rgb(85, 172, 164);font-weight: bold;margin-left: 10px;max-width: 17px;padding-right: 10px;padding-left: 10px;padding-top: 2px;padding-bottom: 2px;">${job.text}</span>` : ''}
                              ${job.text1 ? `<span class="job-text1" style="color: white;border-radius: 25px;font-size: 14px;background-color:black;font-weight: bold;margin-left: 10px;max-width: 17px;padding-right: 10px;padding-left: 10px;padding-top: 2px;padding-bottom: 2px;">${job.text1}</span>` : ''}
                          </p>
                          <h2 class="job-title">${job.title}</h2>
                          <p class="job-location">5d ago - ${job.type} - ${job.location}</p>
                      </div>
                      <div class="filter" style="display: flex;flex-wrap: wrap;align-items: stretch;flex-direction: row-reverse;">
                          ${job.button1 ? `<button class="filter-button" type="button">${job.button1}</button>` : ''}
                          ${job.button2 ? `<button class="filter-button" type="button">${job.button2}</button>` : ''}
                          ${job.button3 ? `<button class="filter-button" type="button">${job.button3}</button>` : ''}
                          ${job.button4 ? `<button class="filter-button" type="button">${job.button4}</button>` : ''}
                      </div>
                  </div>
              </div>
          `;
          jobList.appendChild(jobItem);
      });

      document.querySelectorAll('.filter-button').forEach(button => {
          button.addEventListener('click', () => {
              showSelectedFilter(button.textContent);
              clearButton.style.display = 'inline-block'; // Show Clear button
          });
      });
  }

  function showSelectedFilter(filterText) {
      if (!Array.from(selectedFiltersDiv.children).some(child => child.textContent.includes(filterText))) {
          const filterSpan = document.createElement('span');
          filterSpan.className = 'selected-filter';
          filterSpan.style.margin = '10px';
          filterSpan.style.padding = '5px 10px';
          filterSpan.style.backgroundColor = 'whitesmoke';
          filterSpan.style.borderRadius = '5px';
          filterSpan.style.color = 'rgb(81, 161, 128)';
          filterSpan.style.fontSize = '20px';

          const spanContent = document.createElement('span');
          spanContent.textContent = filterText;

          const removeFilterButton = document.createElement('button');
          removeFilterButton.textContent = 'x';
          removeFilterButton.style.marginLeft = '10px';
          removeFilterButton.style.backgroundColor = 'rgb(81, 161, 128)';
          removeFilterButton.style.border = 'none';
          removeFilterButton.style.borderRadius = '3px';
          removeFilterButton.style.color = 'white';
          removeFilterButton.style.cursor = 'pointer';
          removeFilterButton.style.maxWidth = 'fit-content';
          removeFilterButton.style.fontSize = '19px';

          removeFilterButton.addEventListener('click', () => {
              selectedFiltersDiv.removeChild(filterSpan);
              filterJobs();
              if (selectedFiltersDiv.children.length === 0) {
                  clearButton.style.display = 'none'; // Hide Clear button when no filters
              }
          });

          filterSpan.appendChild(spanContent);
          filterSpan.appendChild(removeFilterButton);
          selectedFiltersDiv.appendChild(filterSpan);
          filterJobs();
      }
  }

  clearButton.addEventListener('click', () => {
      selectedFiltersDiv.innerHTML = ''; // Clear all filters
      clearButton.style.display = 'none'; // Hide Clear button
      filterJobs(); // Reset jobs
  });

  function filterJobs() {
      const query = searchInput.value.toLowerCase();
      const selectedCategories = Array.from(categoryCheckboxes)
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.value);

      const selectedFilters = Array.from(selectedFiltersDiv.children).map(child => child.textContent.replace('x', '').trim());

      const filteredJobs = jobs.filter(job => {
          const matchesSearch = job.title.toLowerCase().includes(query) ||
              job.company.toLowerCase().includes(query) ||
              job.location.toLowerCase().includes(query);

          const matchesCategory = selectedCategories.length === 0 ||
              selectedCategories.includes(job.category);

          const matchesFilters = selectedFilters.length === 0 ||
              [job.button1, job.button2, job.button3, job.button4].some(button =>
                  selectedFilters.includes(button)
              );

          return matchesSearch && matchesCategory && matchesFilters;
      });

      displayJobs(filteredJobs);
  }

  searchInput.addEventListener('input', filterJobs);
  categoryCheckboxes.forEach(checkbox => checkbox.addEventListener('change', filterJobs));

  displayJobs(jobs);
});


