(function() {
  "use strict";
  App.Moderator = {
    add_class_faded: function(id) {
      var isComment = id.startsWith("comment_");
      var isProposalNotification = id.startsWith("proposal_notification_");

      if (isComment) {
        $("#" + id + " .comment-body:first").addClass("faded");
      } else {
        var $element = $("#" + id);
        $element.addClass("faded");

        if (!isProposalNotification) {
          $("#comments").addClass("faded");
        }
      }
    },

    hide_moderator_actions: function(id) {
      $("#" + id + " .moderation-actions").hide();
    }
  };
}).call(this);
