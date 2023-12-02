<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-banner">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Add Banner</h1>
                    <p class="mt5 mb20 tc-green">Make your costumers tempedd to shop via banners</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Banner Name</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text" :minlength=5 :maxlength=20 
                        placeholder="Input your banner name"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Broadcast Schedule</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Input your username"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid From</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Input your Date"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid Until</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Input your Date"
                    >
                </div>
            </div>
            <div class="flex mt30">
                <router-link to="/list-banner">
                    <button class="bt-submit-green">Add banner</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	 name: 'add-user'
}
</script>