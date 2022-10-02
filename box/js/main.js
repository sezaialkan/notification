const button = document.getElementById('button')
const notification = document.getElementById('notification')

button.addEventListener('click', () => createNotification("Notification", "info"))

let createNotification = (e, type = null) => {

    let item = document.createElement('div')
        item.classList.add('item')
        item.classList.add(type ? type : 'default')
        item.innerText = e

        setTimeout(()=>{
            item.remove()
        }, 3000)

    notification.appendChild(item)    
}

createNotification("Notification1", "info")
createNotification("Notification2", "danger")
createNotification("Notification3", "warning")
createNotification("Notification4", )
