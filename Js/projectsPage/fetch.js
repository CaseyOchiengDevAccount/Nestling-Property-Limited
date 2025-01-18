function fetchProjects() {
    fetch('../../data/project.json')
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data)
                })
        })

}

fetchProjects()