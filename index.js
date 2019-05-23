/**
 * Created by Raphael Karanja on 2019-05-23.
 */

function showDetails() {
    let tableBody = document.querySelector("#tableBody");
    tableBody.innerHTML = '';
    data.forEach(detail => {


        detail.items.forEach((item, i) => {
            tableBody.innerHTML += `
           <tr>
                ${
                i=== 0 ? `
                 <td style="padding: 10px" rowspan="${ detail.items.length }"  >
                     ${detail.office}
                </td>
                ` : ''
                }

                <td style="padding: 10px">
                   ${item.name}
                </td>
                <td style="padding: 10px">
                   ${item.quantity}
                </td>
        </tr>
                `
        })


    })
}

showDetails();