<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <br>
            <div>
                <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
            </div>
            
            <p class="forgot-password text-right">
                Don't you have ID ? 
                <router-link :to="{name: 'signup'}">sign up</router-link>
            </p>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style src="../assets/css/login.css">
</style>