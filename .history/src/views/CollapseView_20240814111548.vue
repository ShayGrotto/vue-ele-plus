<template>
   <h1 class="row-title">折叠面板</h1>
    <div class="row">
        <Ele-Collapse v-model="openedValue1" @change="changeHandle">
            <Ele-CollapseItem name="a" title="Home"> Lorem ipsum dolor sit error </Ele-CollapseItem>
            <Ele-CollapseItem name="b" title="About"> Lorem ipsum dolor sit error </Ele-CollapseItem>
            <Ele-CollapseItem name="c" title="Contact"> Lorem ipsum dolor sit error </Ele-CollapseItem>
            <Ele-CollapseItem name="d" title="Contact" disabled>
                Lorem ipsum dolor sit error
            </Ele-CollapseItem>
        </Ele-Collapse>
    </div>
    <h1 class="row-title">手风琴模式</h1>
    <div class="row">
        <Ele-Collapse v-model="openedValue2" @change="changeHandle" accordion>
            <Ele-CollapseItem name="a" title="Home"> Lorem ipsum dolor sit error </Ele-CollapseItem>
            <Ele-CollapseItem name="b" title="About"> Lorem ipsum dolor sit error </Ele-CollapseItem>
            <Ele-CollapseItem name="c" title="Contact"> Lorem ipsum dolor sit error </Ele-CollapseItem>
            <Ele-CollapseItem name="d" title="Contact"> Lorem ipsum dolor sit error </Ele-CollapseItem>
        </Ele-Collapse>
    </div>

    <h1 class="row-title">自定义标题</h1>
    <div class="row">
        <Ele-Collapse v-model="openedValue3" @change="changeHandle" accordion>
            <Ele-CollapseItem name="a" title="Home">
                <template #title>
                    <div class="titleContainer">
                        <span class="title">Home</span>
                        <Ele-Icon icon="house" />
                    </div>
                </template>
                <div>
                    Consistent with real life: in line with the process and logic of real life, and comply
                    with languages and habits that the users are used to;
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such as: design style,
                    icons and texts, position of elements, etc.
                </div>
            </Ele-CollapseItem>
            <Ele-CollapseItem name="b" title="About">
                <template #title>
                    <div class="titleContainer">
                        <span class="title">Home</span>
                        <Ele-Icon icon="house" />
                    </div>
                </template>
                <div>
                    Consistent with real life: in line with the process and logic of real life, and comply
                    with languages and habits that the users are used to;
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such as: design style,
                    icons and texts, position of elements, etc.
                </div>
            </Ele-CollapseItem>
            <Ele-CollapseItem name="c" title="Contact">
                <template #title>
                    <div class="titleContainer">
                        <span class="title">Home</span>
                        <Ele-Icon icon="house" />
                    </div>
                </template>
                <div>
                    Consistent with real life: in line with the process and logic of real life, and comply
                    with languages and habits that the users are used to;
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such as: design style,
                    icons and texts, position of elements, etc.
                </div>
            </Ele-CollapseItem>
            <Ele-CollapseItem name="d" title="Contact">
                <template #title>
                    <div class="titleContainer">
                        <span class="title">Home</span>
                        <Ele-Icon icon="house" />
                    </div>
                </template>
                <div>
                    Consistent with real life: in line with the process and logic of real life, and comply
                    with languages and habits that the users are used to;
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such as: design style,
                    icons and texts, position of elements, etc.
                </div>
            </Ele-CollapseItem>
        </Ele-Collapse>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>