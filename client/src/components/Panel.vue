<template>
    <v-container fluid>
        <v-row
                align="center"
                justify="center"
                class="grey lighten-5"
        >
            <v-col cols="10" md="6">
                <div class="white elevation-2">
                    <v-toolbar flat dense class="cyan" dark>
                        <v-toolbar-title>{{title}}</v-toolbar-title>
                    </v-toolbar>
                    <div class="pl-4 pr-4 pt-2 pb-2">
                        <slot>
                                No slot content defined
                        </slot>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
  name: 'Panel',
  props: ['title']
}
</script>
