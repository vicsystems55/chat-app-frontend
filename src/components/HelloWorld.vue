<template>
  
        <div id="page-container" class="sidebar-o side-scroll">

            <!-- Sidebar -->
            <!--
                Sidebar Mini Mode - Display Helper classes

                Adding 'smini-hide' class to an element will make it invisible (opacity: 0) when the sidebar is in mini mode
                Adding 'smini-show' class to an element will make it visible (opacity: 1) when the sidebar is in mini mode
                    If you would like to disable the transition animation, make sure to also add the 'no-transition' class to your element

                Adding 'smini-hidden' to an element will hide it when the sidebar is in mini mode
                Adding 'smini-visible' to an element will show it (display: inline-block) only when the sidebar is in mini mode
                Adding 'smini-visible-block' to an element will show it (display: block) only when the sidebar is in mini mode
            -->
            <nav id="sidebar" aria-label="Main Navigation">
                <!-- Side Header -->
                <div class="content-header bg-primary">
                    <!-- Logo -->
                    <a class="font-w600 text-white tracking-wide" href="index.html">
                        <span class="smini-visible">
                            D<span class="opacity-75">x</span>
                        </span>
                        <span class="smini-hidden">
                            Dash<span class="opacity-75">mix</span>
                            <span class="font-w400">Chat</span>
                        </span>
                    </a>
                    <!-- END Logo -->

                    <!-- Options -->
                    <div>
                        <!-- Close Sidebar, Visible only on mobile screens -->
                        <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                        <a class="d-lg-none text-white ml-2" data-toggle="layout" data-action="sidebar_close" href="javascript:void(0)">
                            <i class="fa fa-times-circle"></i>
                        </a>
                        <!-- END Close Sidebar -->
                    </div>
                    <!-- END Options -->
                </div>
                <!-- END Side Header -->

                <!-- Sidebar Scrolling -->
                <div class="js-sidebar-scroll">
                    <!-- People -->
                    <div class="content-side">
                        <form class="push" action="db_chat.html" method="POST" onsubmit="return false;">
                            <div class="input-group">
                                <input class="form-control form-control-alt" placeholder="Search People..">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-alt">
                                        <i class="fa fa-fw fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div class="block pull-x">
                            <!-- Online -->
                            <div class="block-content block-content-sm block-content-full bg-body-light">
                                <span class="text-uppercase font-size-sm font-w700">Online</span>
                            </div>
                            <div class="block-content px-0">
                                <ul class="nav-items">
                                    <li>
                                        <a class="media py-2" href="javascript:void(0)">
                                            <div class="mx-3 overlay-container">
                                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar6.jpg" alt="">
                                                <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-success"></span>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">Judy Ford</div>
                                                <div class="font-size-sm text-muted">Photographer</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="media py-2" href="javascript:void(0)">
                                            <div class="mx-3 overlay-container">
                                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar16.jpg" alt="">
                                                <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-success"></span>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">Brian Cruz</div>
                                                <div class="font-w400 font-size-sm text-muted">Web Designer</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="media py-2" href="javascript:void(0)">
                                            <div class="mx-3 overlay-container">
                                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar7.jpg" alt="">
                                                <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-success"></span>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">Lori Moore</div>
                                                <div class="font-w400 font-size-sm text-muted">Web Developer</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- Online -->

                            <!-- Busy -->
                            <div class="block-content block-content-sm block-content-full bg-body-light">
                                <span class="text-uppercase font-size-sm font-w700">Busy</span>
                            </div>
                            <div class="block-content px-0">
                                <ul class="nav-items">
                                    <li>
                                        <a class="media py-2" href="javascript:void(0)">
                                            <div class="mx-3 overlay-container">
                                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar4.jpg" alt="">
                                                <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-danger"></span>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">Laura Carr</div>
                                                <div class="font-w400 font-size-sm text-muted">UI Designer</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- END Busy -->

                            <!-- Away -->
                            <div class="block-content block-content-sm block-content-full bg-body-light">
                                <span class="text-uppercase font-size-sm font-w700">Away</span>
                            </div>
                            <div class="block-content px-0">
                                <ul class="nav-items">
                                    <li>
                                        <a class="media py-2" href="javascript:void(0)">
                                            <div class="mx-3 overlay-container">
                                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar13.jpg" alt="">
                                                <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-warning"></span>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">Henry Harrison</div>
                                                <div class="font-w400 font-size-sm text-muted">Copywriter</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="media py-2" href="javascript:void(0)">
                                            <div class="mx-3 overlay-container">
                                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar8.jpg" alt="">
                                                <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-warning"></span>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">Sara Fields</div>
                                                <div class="font-w400 font-size-sm text-muted">Writer</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- END Away -->

                            <!-- Offline -->
                            <div class="block-content block-content-sm block-content-full bg-body-light">
                                <span class="text-uppercase font-size-sm font-w700">Offline</span>
                            </div>
                            <div class="block-content px-0">
                                <ul class="nav-items">
                                    <li>
                                        <a class="media py-2" href="javascript:void(0)">
                                            <div class="mx-3 overlay-container">
                                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar14.jpg" alt="">
                                                <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-muted"></span>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">Henry Harrison</div>
                                                <div class="font-w400 font-size-sm text-muted">Teacher</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="media py-2" href="javascript:void(0)">
                                            <div class="mx-3 overlay-container">
                                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar6.jpg" alt="">
                                                <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-muted"></span>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">Amber Harvey</div>
                                                <div class="font-w400 font-size-sm text-muted">Photographer</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="media py-2" href="javascript:void(0)">
                                            <div class="mx-3 overlay-container">
                                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar6.jpg" alt="">
                                                <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-muted"></span>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">Andrea Gardner</div>
                                                <div class="font-w400 font-size-sm text-muted">Front-end Developer</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="media py-2" href="javascript:void(0)">
                                            <div class="mx-3 overlay-container">
                                                <img class="img-avatar img-avatar48" src="assets/media/avatars/avatar9.jpg" alt="">
                                                <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-muted"></span>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">David Fuller</div>
                                                <div class="font-w400 font-size-sm text-muted">UX Specialist</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- END Offline -->

                            <!-- Add People -->
                            <div class="block-content border-top">
                                <a class="btn btn-block btn-primary" href="javascript:void(0)">
                                    <i class="fa fa-fw fa-plus mr-1"></i> Add People
                                </a>
                            </div>
                            <!-- END Add People -->
                        </div>
                    </div>
                    <!-- END People -->
                </div>
                <!-- END Sidebar Scrolling -->
            </nav>
            <!-- END Sidebar -->

            <!-- Main Container -->
            <main id="main-container">
                <!-- Page Content -->
                <!-- Chat functionality is initialized in js/pages/be_comp_chat.min.js which was auto compiled from _js/pages/be_comp_chat.js -->
                <!--
                    You can use the following JS function to add a header message to a chat window:
                    Chat.addHeader(chatId, chatMsg, chatMsgLevel)

                    chatId         : the data-chat-id attribute of the chat window
                    chatMsg        : the header message you would like to add
                    chatMsgLevel   : 'self' aligns the header to the right (default is left)

                    You can use the following JS function to add a message to a chat window:
                    Chat.addMessage(chatId, chatMsg, chatMsgLevel)

                    chatId         : the data-chat-id attribute of the chat window
                    chatMsg        : the message you would like to add
                    chatMsgLevel   : 'self' the user sends the message (default is when the user receives the message)
                -->
                <div class="block hero flex-column mb-0 bg-image" style="background-image: url('assets/media/photos/photo19@2x.jpg');">
                    <!-- Chat #5 Header -->
                    <div class="block-header block-header-default w-100 bg-white-95 shadow-lg" style="min-height: 70px; height: 70px;">
                        <h3 class="block-title">
                            <img class="img-avatar img-avatar32" src="assets/media/avatars/avatar7.jpg" alt="">
                            <span class="font-size-sm font-w600 ml-2">Lisa Smith</span>
                        </h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option">
                                <i class="fa fa-cog"></i>
                            </button>
                            <button type="button" class="btn-block-option d-lg-none" data-toggle="layout" data-action="sidebar_toggle">
                                <i class="fa fa-users"></i>
                            </button>
                        </div>
                    </div>
                    <!-- END Chat #5 Header -->

                    <!-- Chat #5 Messages -->
                    <div class="js-chat-messages block-content block-content-full text-wrap-break-word overflow-y-auto w-100 flex-grow-1 px-lg-8 px-xlg-10 bg-white-90" data-chat-id="5">
                      <div class="text-right mr-4">
                        <div class="d-inline-block font-w600 animated fadeIn bg-body-light border-3x px-3 py-2 mb-2 shadow-sm mw-100 border-right border-dark rounded-right">hello this is jobs, how are you today hope you good</div>
                        </div>

                        <div class=" mr-4">
                        <div class="d-inline-block font-w600 animated fadeIn bg-body-light border-3x px-3 py-2 mb-2 shadow-sm mw-100 border-left border-dark rounded-right">hello this is jobs, how are you today hope you good</div>
                        </div>
                    </div>

                    <!-- Chat #5 Input -->
                    <div class="js-chat-form block-content p-3 w-100 d-flex align-items-center bg-white-95 shadow-lg" style="min-height: 70px; height: 70px;">
                        <form class="w-100" action="db_chat.html" method="POST">
                            <div class="input-group">
                                <div class="input-group-prepend d-sm-none dropup">
                                    <button type="button" class="btn btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0)">
                                            <i class="fa fa-file-alt fa-fw mr-1"></i> Upload File
                                        </a>
                                        <a class="dropdown-item" href="javascript:void(0)">
                                            <i class="fa fa-image fa-fw mr-1"></i> Upload Image
                                        </a>
                                        <a class="dropdown-item" href="javascript:void(0)">
                                            <i class="fa fa-microphone-alt fa-fw mr-1"></i> Record Audio
                                        </a>
                                        <a class="dropdown-item" href="javascript:void(0)">
                                            <i class="fa fa-smile fa-fw mr-1"></i> Add Stickers
                                        </a>
                                    </div>
                                </div>
                                <div class="input-group-prepend d-none d-sm-flex">
                                    <button type="button" class="btn btn-link">
                                        <i class="fa fa-file-alt"></i>
                                    </button>
                                    <button type="button" class="btn btn-link">
                                        <i class="fa fa-image"></i>
                                    </button>
                                    <button type="button" class="btn btn-link">
                                        <i class="fa fa-microphone-alt"></i>
                                    </button>
                                    <button type="button" class="btn btn-link">
                                        <i class="fa fa-smile"></i>
                                    </button>
                                </div>
                                <input type="text" class="js-chat-input form-control form-control-alt border-0 bg-transparent" data-target-chat-id="5" placeholder="Type a message..">
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-link">
                                        <i class="fab fa-telegram-plane"></i>
                                        <span class="d-none d-sm-inline ml-1 font-w600">Send</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- END Chat #5 Input -->
                </div>
                <!-- END Page Content -->
            </main>
            <!-- END Main Container -->
        </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

