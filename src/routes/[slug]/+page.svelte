<script lang="ts">
    import { page } from '$app/stores';
    import posts from '$lib/data/articles.json';
    import slugToId from '$lib/utils/slug-to-id';
    import Button from '@components/elements/forms/Button.svelte';
    import PostAuthor from '@components/layouts/post/PostAuthor.svelte';
    import Heading from '@components/layouts/typography/Heading.svelte';

    const post = posts.find((post) => post.id === slugToId($page.params.slug))

</script>

<div class="container">
    <div class="mt-16">
        <Button type="text" href="/">Retour</Button>
    </div>
    <div class="grid grid-cols-[3fr_1fr] gap-12 mt-4">
        <div>
            <div class="rounded-md">
                <img src={post?.thumbnail} alt="Post Thumbnail" class="rounded-md shadow-xl shadow-primary/20 object-cover h-[400px] w-full">
            </div>
            <div class="text-center mt-12">
                <Heading>{post?.title}</Heading>
            </div>
    
            <p class="text-neutral-400 mt-16 text-justify">
                Lorem ipsum dolor sit amet consectetur adiit soluta laboriosam onesciunt dolorum voluptas excepturi aspernatur reprehenderit enim laborum nemo cumque itaque. Nihil suscipit voluptates adipisci, qui nostrum magni, velit animi deleniti quidem harum corrupti accusamus quaerat, quos consequatur molestias. Obcaecati dolorem itaque iusto iste, tenetur, temporibus sapiente saepe quisquam provident est nulla consequuntur sed molestias deserunt? Sunt in, ipsum natus ut quam pariatur temporibus fuga vero distinctio minus quas inventore quasi provident! Saepe, molestias natus, impedit animi eligendi mollitia aliquam, incidunt commodi tempore laborum dolorem corrupti veritatis distinctio recusandae deserunt ut sed! Nemo sit est error numquam, nam omnis nostrum pariatur neque. Laudantium vel atque, itaque at possimus dignissimos dolore fugiat ipsa ipsam dolorem illum eum voluptatum! Laudantium dignissimos suscipit dolorum recusandae iste labore nulla, quaerat eligendi perspiciatis molestias ut soluta laborum rem temporibus commodi veritatis obcaecati corrupti! Voluptate reiciendis veritatis tempore esse nostrum numquam ipsa possimus facilis necessitatibus velit, illo quasi fuga explicabo perferendis. Placeat fuga sequi exercitationem enim porro non, animi dolor voluptatibus, neque, pariatur debitis laudantium nulla esse atque? Cumque amet facilis labore, illum officia dolor explicabo quia architecto nulla asperiores iusto aliquid at porro alias, quasi est doloribus saepe sunt! Placeat libero perferendis adipisci ad nam natus corporis perspiciatis repellendus reiciendis impedit soluta maxime quis numquam quod dolore ullam exercitationem, non quo, nesciunt fugiat laboriosam eligendi quas? Placeat iste numquam at veritatis, sequi laudantium beatae sapiente facilis, possimus consequatur dolore minima harum voluptates unde nobis ex, animi incidunt autem fugiat quia voluptatibus. Hic, ipsum, consequuntur rerum sapiente quas itaque suscipit illum corrupti exercitationem, ex et saepe doloremque accusamus beatae. Cumque quos reiciendis reprehenderit quasi labore beatae, odio iste rem nam rerum molestias corporis nulla molestiae. Perspiciatis doloribus porro expedita ex blanditiis consequuntur beatae nobis facilis quo deleniti maiores ea distinctio vitae laboriosam aut aliquam nulla libero sit, exercitationem omnis sunt, cum possimus illo tempore! Ut enim dicta, aliquid mollitia amet corporis maiores deleniti voluptatem atque sunt facilis impedit quam. Aliquam enim repudiandae numquam aperiam. Illum minus dicta saepe, porro dolor accusantium placeat facere. Debitis quibusdam magnam tempore reiciendis magni, saepe, obcaecati adipisci dolorem reprehenderit voluptatibus sint, sed voluptate vel omnis laborum id? Quo quam magni nobis alias impedit repellendus numquam hic tempore neque doloribus, nisi unde sunt, animi dignissimos ducimus atque inventore! Reprehenderit corporis exercitationem quas sunt ea maxime facere veniam necessitatibus modi, quasi harum repellat cum! Asperiores consequatur, veritatis rerum reiciendis, neque assumenda voluptatem eaque magnam nobis nulla molestias, suscipit error dignissimos libero deserunt aut eius reprehenderit! Explicabo voluptas nisi enim sint voluptate minus et nostrum unde, reiciendis quo doloremque recusandae quaerat saepe perspiciatis veritatis asperiores tenetur minima excepturi eveniet error voluptatibus ducimus! Sequi quam corrupti alias enim debitis consectetur mollitia repudiandae repellendus voluptate et, neque est minus itaque ipsa quia velit? Earumnctio quidem voluptas atque cumque architecto.
            </p>

            <div class="mt-16">
                <PostAuthor author={post?.author} />
            </div>
        </div>
    
        <div>
            <div class="bg-primary sticky top-12">
                <h2>cc</h2>
            </div>
        </div>
    </div>
</div>
