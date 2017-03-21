(ns personal-website.projects 
    (:require [reagent.core :as reagent]))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project main content
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def projects-state 
    (reagent/atom 
        {:title "Projects" 
         :projects [{:id 1 :title "Snake Game" :description "Lorem Ipsum" :source "#" :link "#" :isDl false :image {:src "#" :alt "image of project"}} 
                    {:id 2 :title "Website & Blog" :description "Lorem Ipsum" :source "#" :link "#" :isDl true :image {:src "#" :alt "image of project"}}]}))

(defn project-tile [project] 
    [:div {:class "project-container"} 
      [:h3 {:class "project-title"} (:title project)] 
      [:p {:class "project-description"} (:description project)] 
      [:a {:class "project-link-btn" :href (:source project)} "source code"] 
      [:a {:class "project-link-btn" :href (:link project)} (if (:isDl project) "download" "link")] 
      [:img {:class "project-img" :src (get-in project [:image :src]) :alt (get-in project [:image :alt])}]])

(defn projects-content [] 
    [:div {:id "projects-list-container"} 
      [:h1 {:id "projects-heading"} (:title @projects-state)] 
      [:div {:id "project-list"} 
        (for [project (:projects @projects-state)] 
            ^{:key (:id project)} 
            [project-tile project])]])