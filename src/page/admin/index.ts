import { cate } from "../../api/cate"
import { List, Listbycate } from "../../api/product"
import Header from "../../component/header/admin"
import SidebarAdmin from "../../component/sidebar/admin"

const Admin = {
    render: async () => {

        const data = await List()
        console.log(data.data);
        const category = await cate();

        return /*html*/`
        ${Header.render()}
        <div class="flex mt-3">
            <div class="w-[250px] flex-none">
            ${SidebarAdmin.render()}
            </div>
            <div class="bg-gray-100 w-full ">
                <div class="mx-10">
                    <div class="flex justify-between my-5">
                        <h1 class="text-xl">
                            Danh sách sản phẩm
                        </h1>
                        <a data-navigo href="/admin/product/add" class="mr-5 border-blue-500 text-blue-500 border-4 rounded-md p-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg></a>
                    </div>
                </div>
                <div class="mx-10 flex">
                    <p class="font-bold py-1 mr-3 my-3">Bộ lọc: </p> 
                    <div class="flex-none">
                        <p class="my-1">Danh mục sản phẩm</p>
                        <select class="w-[400px] px-1 rounded-md py-2" name="" id="filter">
                            <option value="">---</option>
                            ${category.data.map((item: Category) => `
                            <option value="${item.id}">${item.name}</option>`).join("")
            }
                        </select>
                    </div>
                </div>
                <table class="table-auto w-11/12 mx-auto my-5 text-center">
                    <thead>
                        <tr class="border-t-[1px] border-gray-500 h-14">
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Ảnh</th>
                        <th>Thành tiền</th>
                        <th>Mô tả</th>
                        <th>Ẩn/hiện</th>
                        <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.data.map((item: Product, index: number) => `
                        <tr class="border-t-[1px] border-gray-500   h-[160px] p-1">
                        <td>${index + 1}</td>
                        <td>${item.name}</td>
                        <td><img class="w-[100px] m-3" src="${item.image}"/></td>
                        <td id="price_prod">${item.price} đ</td>
                        <td class="w-[50%]">${item.shortDesc}</td>
                        <td>
                            <label for="default-toggle ${item.id}" class="inline-flex relative items-center cursor-pointer">
                                <input ${item.isDelete ? "checked" : ""} type="checkbox" value="true" id="default-toggle ${item.id}" class="sr-only peer">
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="">
                            <a data-navigo href="/admin/product/${item.id}/update"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg></a>
                        </td>
                        </tr>
                        `).join("")}
                        
                    </tbody>
                </table>
                
            </div>
        </div>
        `
    }, afterRender: () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        console.log(urlParams.get('cat'))

        const filter = document.getElementById('filter')
        filter?.addEventListener('change', async function (e) {
            console.log(e.target.value)
            history.replaceState(null, null, `/product?category=${e.target.value}`)
            const data = await Listbycate(e.target.value)
            const newRender = data.data
            console.log(newRender);

        })

    }
}


export default Admin