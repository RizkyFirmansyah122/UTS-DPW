<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Banner</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage your Banner to attrac visitor attantion</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-banner">
                        <button class="bt-green">+ Add Banner</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Tambah deskripsi..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>BANNER NAME</th>
                            <th>BROADCAST SCHEDULE</th>
                            <th>VALID FORM</th>
                            <th>VALID UNTIL</th>
                            <th>BANNER STATUS</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_banner" :key="item.id">
                            <td class="center">{{ item.banner_name }}</td>
                            <td class="center">{{ item.broadcast_schedule }}</td>
                            <td class="center"> <label class="label-green">{{ item.valid_from}}</label></td>
                            <td class="center"> <label class="label-green">{{ item.valid_until}}</label></td>
                            <td class="center">
                             <div v-if="item.active == true">
                                    <label class="label-green">ACTIVE</label>
                                </div>
                                <div v-if="item.active == false">
                                    <label class="label-red">NON-ACTIVE</label>
                                </div>{{ item.banner_status}}</td>
                            
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-banner">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-banner">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
	name: 'list-banner',
	components: {
		Menu
	},
    data(){
        return {
            list_banner: [
                {
                    id: "1",
                    banner_name: "NEW PHONE",
                    broadcast_schedule: "Senin",
                    valid_from: "2021-06-01",
                    valid_until: "2021-06-03",
                    active: true,
                },
                {
                    id: "2",
                    banner_name: "FLASHSALE PHONE",
                    broadcast_schedule: "Kamis",
                    valid_from: "2021-06-03",
                    valid_until: "2021-06-06",
                    active: true,
                },
                {
                    id: "3",
                    banner_name: "NEW LAPTOP",
                    broadcast_schedule: "Jum'at",
                    valid_from: "2021-06-04",
                    valid_until: "2021-06-08",
                    active: true,
                },
                {
                    id: "4",
                    banner_name: "NEW MACBOOK",
                    broadcast_schedule: "Minggu",
                    valid_from: "2021-06-15",
                    valid_until: "2021-06-20",
                    active: true,
                },
                {
                    id: "5",
                    banner_name: "NEW MOUSE",
                    broadcast_schedule: "Senin",
                    valid_from: "2021-06-01",
                    valid_until: "2021-06-20",
                    active: false,
                }
            ]
        }
    }
}
</script>