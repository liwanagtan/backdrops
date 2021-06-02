<script>

    const backdrops = [
        {url: 'images/Abstract-1.jpg', name: 'Abstract-1'},
        {url: 'images/Abstract-2.jpg', name: 'Abstract-2'},
        {url: 'images/Abstract-3.jpg', name: 'Abstract-3'},
        {url: 'images/Abstract-4.jpg', name: 'Abstract-2'},
        {url: 'images/Black-1.jpg', name: 'Black-1'},
        {url: 'images/Black-2.jpg', name: 'Black-2'},
        {url: 'images/Blue-1.jpg', name: 'Blue-1'},
        {url: 'images/Blue-2.jpg', name: 'Blue-2'},
        {url: 'images/Blue-3.jpg', name: 'Blue-3'},
        {url: 'images/Blue-4.jpg', name: 'Blue-4'},
        {url: 'images/Blue-5.jpg', name: 'Blue-5'},
        {url: 'images/Bronze-1.jpg', name: 'Bronze-1'},
        {url: 'images/Bronze-2.jpg', name: 'Bronze-2'},
        {url: 'images/Gray-1.jpg', name: 'Gray-1'},
        {url: 'images/Gray-2.jpg', name: 'Gray-2'},
        {url: 'images/Green-1.jpg', name: 'Green-1'},
        {url: 'images/Green-2.jpg', name: 'Green-2'},
        {url: 'images/Orange-1.jpg', name: 'Orange-1'},
        {url: 'images/Orange-2.jpg', name: 'Orange-2'},
        {url: 'images/Orange-3.jpg', name: 'Orange-3'},
        {url: 'images/Pink-1.jpg', name: 'Pink-1'},
        {url: 'images/Pink-2.jpg', name: 'Pink-2'},
        {url: 'images/Pink-3.jpg', name: 'Pink-3'},
        {url: 'images/Purple-1.jpg', name: 'Purple-1'},
        {url: 'images/Yellow-1.jpg', name: 'Yellow-1'},
        {url: 'images/Red-1.jpg', name: 'Red-1'},
        {url: 'images/Red-2.jpg', name: 'Red-2'},
    ]

</script>

<svelte:head>
	<title>Portrait Backdrops</title>
</svelte:head>


<div class="flex flex-col w-[420px] sm:w-[640px] md:w-[960px] mx-auto my-12">
    <h1 class="text-4xl mb-4 text-center">Choose your portrait background</h1>
    <p class="text-2xl mb-12 text-center">You can hover on each background to see a sample of what it will look like</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each backdrops as backdrop}
            <div class="p-4 bg-gray-700 cursor-pointer group hover:bg-white hover:text-gray-700 font-bolds transform duration-500">
                <div class="relative max-w-[420px]">
                    <img src={backdrop.url} alt={backdrops.name} class="">
                    <img src="images/graduate.png" alt="Graduate" class="hidden group-hover:flex absolute inset-0 transform duration-500">
                </div>
                <h2 class="text-center mt-12">{backdrop.name}</h2>
            </div>
        {/each}
    </div>
</div>