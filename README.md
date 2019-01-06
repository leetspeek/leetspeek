# [leetspeek](https://leetspeek.tn/)


leetspeek is a learning-oriented collective that is open to everyone, our
 primary focus is to encourage learning, blogging in order to deepen knowledge
 on various computer science areas.

## Getting Started

* [Install](https://jekyllrb.com/docs/installation/) the gem
* Read up about [jekyll](https://jekyllrb.com/docs/usage/) and its [Configuration](https://jekyllrb.com/docs/configuration/)

# Writing Articles

Start by writing interesting articles, the content should intermediate to advanced (avoid how-to style articles).
Follow the steps below for our contribution workflow.

## Forking the repo

- Create a personal fork of the project on Github.
- Clone the fork on your local machine. Your remote repo on Github is called origin.
- Add the original repository as a remote called upstream.
- If you created your fork a while ago be sure to pull upstream changes into your local repository.
- Install jekyll and the related gems.

## Adding a new article

- Create a new branch for the new article to work on! Branch from from master.
- Add a new file under `_posts` with article date-name.
- Preview your changes locally through `bundle exec jekyll s`.

## Adding code

- Inline code can be added through `` .
- For block codes, you can use the [highlight block][rouge].

## Adding images

- Create a folder under `assets/img` named as your github username.
- Add your image in that folder.
- Image can be added using this code 

{% highlight markdown %}
![Image title]({{ site.url }}/assets/img/username/image-name.png)
{% endhighlight %}


## Peer-reviewing
- Push your branch to your fork on Github, the remote origin.
- Create an issue on leetspeek repo following the Issue Templates.
- Second publish your PR, you can tag members for Peer review too.


[rouge]: https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting
