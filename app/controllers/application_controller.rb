class ApplicationController < ActionController::Base
    def after_sign_in_path_for(resource)
        "page/member_list" # ログイン後に遷移するpathを設定
    end
end
